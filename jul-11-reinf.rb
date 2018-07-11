require 'pry'
require 'httparty'

toronto_wards_response = HTTParty.get('https://represent.opennorth.ca/boundaries/toronto-wards/')
toronto_wards_json = JSON.parse(toronto_wards_response.body)

toronto_wards_json['objects'].each do |ward|
  puts ward['name']
end

reps_response = HTTParty.get('https://represent.opennorth.ca/representatives/?point=45.524,-73.596&format=apibrowser/')
reps_json = JSON.parse(reps_response.body)

reps_json['objects'].each do |obj|
  puts obj['party_name']
  puts obj['first_name']
  puts obj['last_name']
  puts
end
