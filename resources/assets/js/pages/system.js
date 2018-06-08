import Users from '../containers/system/users'
import Companies from '../containers/system/Companies'
import Departments from '../containers/system/Departments'
import Apps from '../containers/system/Apps'
import Roles from '../containers/system/Roles'
import Parameters from '../containers/system/Parameters'

export default {
  '/sys/users': Users,
  '/sys/companies': Companies,
  '/sys/departments': Departments,
  '/sys/apps': Apps,
  '/sys/roles': Roles,
  '/sys/parameters': Parameters,
}