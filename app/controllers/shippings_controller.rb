class ShippingsController < ApplicationController
  def tracker
    packages = [
      ActiveShipping::Package.new(100,               # 100 grams
                                  [93,10],           # 93 cm long, 10 cm diameter
                                  cylinder: true),   # cylinders have different volume calculations

      ActiveShipping::Package.new(7.5 * 16,          # 7.5 lbs, times 16 oz/lb.
                                  [15, 10, 4.5],     # 15x10x4.5 inches
                                  units: :imperial)  # not grams, not centimetres
     ]

    
  end
end
