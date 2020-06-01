export default $axios => ({

    htmlToPdf: async (html, responseType = 'blob') => {
      const {data} = await $axios.post('/decree/htmlToPdf', {html}, {responseType});
      return data;
    },

    getPdf: async (fileName, responseType = 'blob') => {
      const {data} = await $axios.get(`/decree/getPdf?fileName=${fileName}`, {responseType});
      return data;
    }
   
  });
