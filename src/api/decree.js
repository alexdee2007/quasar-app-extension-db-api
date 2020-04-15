export default $axios => ({

    htmlToPdf: async (html) => {
      const {data} = await $axios.post('/decree/htmlToPdf', {html}, {responseType: 'blob'});
      return data;
    },

    getPdf: async (fileName) => {
      const {data} = await $axios.get(`/decree/getPdf?fileName=${fileName}`, {responseType: 'blob'});
      return data;
    }

  });
