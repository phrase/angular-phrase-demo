require 'sinatra'

class MyApp < Sinatra::Base
  register Barista::Integration::Sinatra

  get '/' do
    slim :index
  end
end
