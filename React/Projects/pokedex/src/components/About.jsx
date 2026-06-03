import React from 'react'

const About = (props) => {
  return (
    <div>
      <div className="space-y-2">
        <div className="flex">
          <span className="w-28 text-gray-400">Species</span>
          <span>Seed</span>
        </div>

        <div className="flex">
          <span className="w-28 text-gray-400">Height</span>
          <span>  ({props.data.height/10} m)</span>
        </div>

        <div className="flex">
          <span className="w-28 text-gray-400">Weight</span>
          <span>{(props.data.weight*0.2204).toFixed(2)} lbs ({props.data.weight/10} kg)</span>
        </div>

        <div className="flex">
          <span className="w-28 text-gray-400">Abilities</span>
          <span>{props.data.abilities[0].ability.name}, {props.data.abilities[1].ability.name}</span>
        </div>
      </div>

      <h3 className="mt-6 mb-3 font-semibold">Breeding</h3>

      <div className="space-y-2">
        <div className="flex">
          <span className="w-28 text-gray-400">Gender</span>
          <span>♂ 87.5% &nbsp; ♀ 12.5%</span>
        </div>

        <div className="flex">
          <span className="w-28 text-gray-400">Egg Groups</span>
          <span>Monster</span>
        </div>

        <div className="flex">
          <span className="w-28 text-gray-400">Egg Cycle</span>
          <span>Grass</span>
        </div>
      </div>
    </div>
  )
}

export default About