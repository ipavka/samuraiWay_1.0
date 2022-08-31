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
        </div>
    )
}
