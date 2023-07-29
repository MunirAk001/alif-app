export const apiClient = (endpoint:string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2'): Promise<any> => {
  const apiKey = '96PHQl6EuJRvs8uG4RNoOgPnfbf2vZAlubwhtGbl'
  return fetch(`${endpoint}&api_key=${apiKey}`)
}
