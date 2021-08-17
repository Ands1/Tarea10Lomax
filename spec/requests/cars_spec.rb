require 'rails_helper'

RSpec.describe "Cars", type: :request do

  before(:all) do
    @cars = Car.create(model: 7, brand: 'ToyooootaSeed', driverid: 7, alias: '', code: 'cod1')
  end

  describe "GET /index" do
    it 'Verifica el create de Cars' do
      expect(@cars).to be_valid
    end

    it 'Verifica el update de cars' do
      @cars.update(:code => "Codigogo1")
      expect(Car.find_by_code("Codigogo1")).to eq(@cars)
    end

    it 'Verifica el destoy de Cars' do
      @cars.destroy
      expect(Car.find_by(code: "Codigogo1")).to be_nil
    end

  end



end