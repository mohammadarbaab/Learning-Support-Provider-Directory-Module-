  import data from '../data.json';

  // Simulate API call for providers list
  export const getProviders = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500); // 0.5 sec delay
    });
  };

  // Simulate API call for single provider
  export const getProviderById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const provider = data.find(item => item.id === parseInt(id));
        if (provider) {
          resolve(provider);
        } else {
          reject(new Error("Provider not found"));
        }
      }, 500);
    });
  };