import { createContext } from 'react'
import { defaultConfig } from '../..'
import type { Config } from '../../types'

export const UnstyledUiConfigContext = createContext<Config>(defaultConfig)
