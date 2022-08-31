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
          <h1>feature-1</h1>
          <h1>feature-1-change-2</h1>
        <h1>master-change-3</h1>
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
        </div>
    )
}
