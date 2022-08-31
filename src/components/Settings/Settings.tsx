import React from "react";
import settingsStyle from './Settings.module.css';

const data = [
  {
    id: 1,
    name: 'Dimon'
  },
  {
    id: 2,
    name: 'Max'
  },
  {
    id: 3,
    name: 'Bob'
  },

  {
    id: 4,
    name: 'master-cahge'
  },
  {
    id: 5,
    name: 'Fill'
  },
]

export const Settings = () => {
  return (
    <div>
      Settings
      <div>
        {data.map(el => {
          return (
            <div>
              <p>{el.id}</p>
              <p>{el.name}</p>
            </div>
          )
        })}
      </div>
      <h3>master-change-5</h3>
      <h1>feature-1-change-3</h1>
      <h1>feature-1-change-4</h1>
      <div>
        <h1>feature-1-change-5</h1>
      </div>
      <div>
        <h2>feature-1-change-6</h2>
      </div>
    </div>
  )
}
