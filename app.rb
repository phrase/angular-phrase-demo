require 'sinatra'
require 'slim'
require 'barista'

register Barista::Integration::Sinatra

get '/' do
  slim :index
end
