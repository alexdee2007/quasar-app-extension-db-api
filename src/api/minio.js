export default $axios => ({

    getPresignedUrlForPut: async (folderName, fileName) => {
      const {data} = await $axios.get(`/minio/putPresignedUrl?folder=${folderName}&name=${fileName}`);
      return data;
    },

    getPresignedUrlForGet: async (fileName) => {
      const {data} = await $axios.get(`/minio/getPresignedUrl?name=${fileName}`);
      return data;
    },

    deleteFile: async (fileName) => {
      const {data} = await $axios.delete(`/minio/${fileName}`);
      return data;
    },

    signAndPutDecree: async (decree) => {
      const {data} = await $axios.post(`/minio/signAndPutDecree`, {decree});
      return data;
    }

  });