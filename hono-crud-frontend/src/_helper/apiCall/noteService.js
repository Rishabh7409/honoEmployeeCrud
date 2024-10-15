import RestMethod from "./rest_Methods";

export const getAllEmployee = async () => {
    let url = "/get-all";
    try {
        const response = await RestMethod.GET(url);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};

export const getByid = async (id) => {
    let url = "/get-by-id/"+id;
    try {
        const response = await RestMethod.GET(url);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};

export const createEmployee = async (data) => {
    let url = "/register";
    try {
        const response = await RestMethod.POST(url, data);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};
export const updateEmployee = async (id,data) => {
    let url = "/update-by-id/"+id;
    try {
        const response = await RestMethod.PUT(url, data);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};

export const deleteEmployee = async (id) => {
    let url = "/delete-by-id/"+id;
    try {
        const response = await RestMethod.DELETE(url);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};
