puts "Cargando el seed de Development"

require 'faker'

Car.create(model: Faker::Number.within(range: 1980..2022), brand: Faker::Vehicle.manufacture, driverid: Faker::IDNumber.valid, code: Faker::Code.nric)
Car.create(model: Faker::Number.within(range: 1980..2022), brand: Faker::Vehicle.manufacture, driverid: Faker::IDNumber.valid, code: Faker::Code.nric)
Car.create(model: Faker::Number.within(range: 1980..2022), brand: Faker::Vehicle.manufacture, driverid: Faker::IDNumber.valid, code: Faker::Code.nric)
Car.create(model: Faker::Number.within(range: 1980..2022), brand: Faker::Vehicle.manufacture, driverid: Faker::IDNumber.valid, code: Faker::Code.nric)

#Car.create(model: 7, brand: 'ToyooootaSeed', driverid: 7, code: 'cod1')
#Car.create(model: 7, brand: 'TesssslaSeed', driverid: 7, code: 'cod2')
#Car.create(model: 7, brand: 'MazdaSeed', driverid: 7, code: 'cod3')

#Driver.create(name: 'aNDS_seed_dev', code:'cod1')
#Driver.create(name: 'Carlangas_seed_dev', code:'cod1')
#Driver.create(name: 'Carlota_seed_dev', code:'cod1')