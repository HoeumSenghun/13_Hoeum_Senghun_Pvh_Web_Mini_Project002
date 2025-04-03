

export async function taskService(workspaceId, pageNo, pageSize, sortBy, sortDirection ) {
    const res = fetch(
      `http://96.9.81.187:8080/api/v1/tasks/workspace/${workspaceId}?pageNo${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      {
        headers: {
          accept: "*/*",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDM2NjM0NzcsImV4cCI6MTc0Mzc0OTg3N30.W2Ak6OyeF12Vfk_AKTuMCes1xwi6jBDDBvq-fPhVVlLGI3n-OdZIIq_-mWpsJlcJL96NsEHDUQCIGyxJrIJGnw",
        },
      }
    );
    const data = (await res).json()

    if (+data.status === 200) {
        return await data.payload;
      }
      
  }