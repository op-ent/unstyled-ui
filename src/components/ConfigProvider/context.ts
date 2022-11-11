import { createContext } from 'react'
import { defaultConfig } from '../../config'
import { Config } from '../../types'

export const UnstyledUiConfigContext = createContext<Config>(defaultConfig)
