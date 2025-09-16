use warnings;
use strict;

use HTTP::Server::Simple::CGI;

{
  package WebServer; use base 'HTTP::Server::Simple::CGI';

  use File::Slurp; # import read_file
  use Cwd 'abs_path';
  use File::Spec;

  my $nl = "\x0d\x0a";

  my $root = '.';
  if (@ARGV) {
    $root = shift;
  }
  chdir($root);

  sub print_header { # {{{

    my $content_type = shift;

    print "HTTP/1.0 200 OK$nl";
    print "Content-Type: $content_type; charset=utf-8$nl$nl";

  } # }}}

  sub send_404 { # {{{
    my $path_relative = shift;

    print "HTTP/1.0 404 Not Found$nl$nl";
    print "File '$path_relative' not found";

  } # }}}

  sub serve_file { # {{{

    my $path_relative = shift;
    my $content_type  = shift;

    if (-e $path_relative) {
      print_header($content_type);
      print read_file($path_relative, binmode => ":raw");
    }
    else {
      send_404($path_relative);
    }

  } # }}}

  my %mime_types = (
    'html' => 'text/html',
    'jade' => 'text/html',
    'js'   => 'application/javascript',
    'json' => 'application/json',
    'css'  => 'text/css',
    'png'  => 'image/png',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'ico'  => 'image/x-icon',
    'txt'  => 'text/plain'
  );

  sub handle_request { # {{{ 

    my $self = shift;
    my $cgi  = shift;

    my $path = $cgi->path_info;
    my $doc_root = abs_path('.');
    my $file_path = File::Spec->catfile($doc_root, $path);
    $file_path = abs_path($file_path);

    if (index($file_path, $doc_root) != 0) {
      print "HTTP/1.0 403 Forbidden$nl$nl";
      print "Forbidden";
      return;
    }

    if ($path eq '/') {
      $path = '/index.html';
    }

    my ($ext) = $path =~ /\.([^.]+)$/;

    if (defined $ext and exists $mime_types{$ext}) {
      serve_file(substr($file_path, length($doc_root) + 1), $mime_types{$ext});
      return;
    }

    print STDERR "Unknown Mime type for $path\n";

    serve_file(substr($file_path, length($doc_root) + 1), 'text/plain');

  } # }}} 
}

# Use Port 8080 (http://localhost:8080)
my $pid = WebServer -> new(8080) -> background;
print "pid of webserver=$pid\n";
