import Users from '../containers/system/users'
import Apps from '../containers/system/Apps'
import Roles from '../containers/system/Roles'
import Parameters from '../containers/system/Parameters'

export default {
  '/sys/users': Users,
  '/sys/apps': Apps,
  '/sys/roles': Roles,
  '/sys/parameters': Parameters,
}