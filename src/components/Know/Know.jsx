import React from 'react';
import Engg from '../../assets/Engg.webp';
import yrs from '../../assets/ribexp.webp';
import Kncmp from './Kncmp';
import su1 from '../../assets/stl.webp'
import su2 from '../../assets/stl2.webp'
import ph1 from '../../assets/stl3.webp'
import ph2 from '../../assets/stl4.webp'
import ph3 from '../../assets/ph3.webp'
import ss1 from '../../assets/stl5.webp'


const Know = () => {
  const models = [
    {
      name: "Supreme",
      color: "bg-blue-100",
      data: [
        {
          img: su1,
          title: "Supreme Evacuated Tube Collector Solar Water Heating System",
          info: [
            "Available in 100 LPD, 150 LPD, 200 LPD, 250 LPD, 300 LPD and 500 LPD for domestic applications And 1000 LPD and above size for commercial applications.",
            "Extra assistant tank is fitted instead of air vent, withstands high pressure of cold water and also minimize mixing of hot and cold water .",
            " SS Non welded Hot Water tank.", "Ceramic Glass lined coated tank systems also available.", "Triple layer Evacuated tubes gives high heat absorbing efficiency."
          ],
        },
        {
          img: su2,
          title: "Ceramic Tank Water Heater",
          info: [
            "Available in 100 LPD, 150 LPD, 200 LPD, 250 LPD, 300 LPD and 500 LPD for domestic applications And 1000 LPD and above size for commercial applications.",
            "Extra assistant tank is fitted instead of air vent, withstands high pressure of cold water and also minimize mixing of hot and cold water .",
            " SS Non welded Hot Water tank.", "Ceramic Glass lined coated tank systems also available.", "Triple layer Evacuated tubes gives high heat absorbing efficiency."
          ],
        },
      ]
    },
    {
      name: "Pheonix",
      color: "bg-gray-100",
      data: [
        {
          img: ph2,
          title: "Pheonix Diamond",
          info: [
            "Available in 125/175/225/275/325 LPD for domestic applications and Industrial applications.",
            "Inner of Water Tank : 0.60mm Thick, Side-dish : 1mm, Stainless Steel 316 L grade.",
            "Outer of Water Tank : 0.35mm Thick Stainless Steel with SS304 Material.",
            "Water Tank Stand : Alluminium Alloy Bracket with 2.5mm Thickness.",
            "System with Phoenix Intelligent Solar Controller and Provision of Electrical Heater and Inlet & Outlet with 3/4 Male BSP",
            "System Operational Life : 20 Years"

          ],
        },
        {
          img: ph1,
          title: "Pheonix Platinum",
          info: [
            "Available in 125/175/225/275/325 LPD for domestic and commercial applications.",
            "Inner of Water Tank : 0.60mm Thick, Side-dish : 1mm, Stainless Steel 316 L grade.",
            "Outer of Water Tank : 0.35mm Thick Pre-coated GI.",
            "Water Tank Stand : Pre-Coated GI Material, 1.5mm thickness.",
            "System with Phoenix Intelligent Solar Controller and Provision of Electrical Heater and Inlet & Outlet with 3/4 Male BSP",
            "System Operational Life : 15 Years"
          ],
        },
        {
          img: ph2,
          title: "Pheonix Premium",
          info: [
            "Available in 100/150/200/250/300 LPD for domestic and commercial applications.",
            "Inner of Water Tank : 0.50mm Thick Stainless Steel 316 L grade.",
            "Outer of Water Tank :  0.35mm Thick Stainless Steel with SS304 Material.",
            "Water Tank Stand : Alluminium Alloy Bracket with 2.5mm Thickness.",
            "System with Phoenix Intelligent Solar Controller and Provision of Electrical Heater and Inlet & Outlet with 3/4 Male BSP",
            "System Operational Life : 20 Years"
          ],
        },
        {
          img: ph1,
          title: "Pheonix Standard",
          info: [
            "Available in 100/150/200/250/300 LPD for domestic and commercial applications.",
            "Inner of Water Tank : 0.50mm Thick Stainless Steel 316 L grade.",
            "Outer of Water Tank : 0.35mm Thick Stainless Steel with SS304 Material.",
            "Water Tank Stand : Pre-Coated GI Material, 1.5mm thickness.",
            "System with Phoenix Intelligent Solar Controller and Provision of Electrical Heater and Inlet & Outlet with 3/4 Male BSP",
            "System Operational Life : 10 Years"
          ],
        },
        {
          img: ph3,
          title: "Pheonix Standard",
          info: [
            "Available in 200 LPD for domestic and commercial applications.",
            "Inner of Water Tank : Modified PolyPropylene (MPP), Thickness : 4mm",
            "Outer of Water Tank : Pre-coated GI, Thickness : 0.3mm.",
            "Water Tank Stand :  Aluminium Alloy, Thickness : 2.5mm with 32 deg angle.Insulation Material : PUF, Thickness : 50mm.",
            "System with Phoenix Intelligent Solar Controller and Provision of Electrical Heater and Inlet & Outlet with 3/4 Male BSP",
            "System Operational Life : 5 Years",
            
          ],
        }
      ]
    },
    {
      name: "Sun Storm",
      color: "bg-violet-100",
      data: [
        {
          img: ss1,
          title: "Ceramic Tank Water Heater",
          info: [
            "Available in 100 LPD, 150 LPD, 200 LPD, 250 LPD, 300 LPD and 500 LPD for domestic applications And 1000 LPD and above size for commercial applications.",
            "Extra assistant tank is fitted instead of air vent, withstands high pressure of cold water and also minimize mixing of hot and cold water .",
            " SS Non welded Hot Water tank.", "Ceramic Glass lined coated tank systems also available.", "Triple layer Evacuated tubes gives high heat absorbing efficiency."
          ],
        }
      ]
    },
  ];

  return (
    <div className='mb-10 xs:relative'>
      <div className='flex justify-between items-center mr-28 xs:mr-7'>
        <p className='text-4xl font-semibold text-orange-800 pl-[120px] xs:pl-[30px] xs:text-2xl '>Solar Water Heater</p>
        <div className='flex gap-20 xs:gap-5'>
        <img className='xs:w-[90px] xs:h-[50px]' src={Engg} alt="Energy Engg. and Equip." />
        <img className='xs:w-[90px] xs:h-[50px]' src={yrs} alt="Energy Engg. and Equip." />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        {models.map((model, index) => (
          <div className={`${model.color} xs:flex xs:flex-col xs:w-[400px] xs:pl-[30px] flex flex-wrap rounded-xl pt-[30px] w-[1500px] h-auto pb-[30px]  pl-[120px] mt-12`} key={index}>
            <h1 className='font-medium  text-3xl xs:text-2xl'>{index + 1}. {model.name} Solar</h1>
            <div className='flex w-full items-center justify-center flex-wrap gap-12 px-32 xs:w-[500px] xs:pl-0 xs:pt-0 xs:flex xs:items-center xs:justify-center'>
              {model.data.map((item, index) => (
                <Kncmp model={item} key={index}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Know;
