import makeApiCall from '../helpers/fetch'
import { gatewayHost, fetchVehicles } from '../config'

export default async function fetchVehiclesService(url) {
  const resp = await makeApiCall(url || `${gatewayHost}${fetchVehicles}`, 'GET')
  return resp
}
