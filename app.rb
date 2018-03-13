require 'sinatra'
require 'rack/contrib/try_static'

class MyApp < Sinatra::Base
  register Barista::Integration::Sinatra
  use Rack::TryStatic, :root => 'node_modules', :urls => %w[/]

  get '/' do
    slim :index
  end
end
