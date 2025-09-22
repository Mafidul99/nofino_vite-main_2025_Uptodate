import axios from "axios";



const api = axios.create({
    baseURL: "/",
});

export const getCarrarData = () => {
    return api.get("/");
}


export const getCarrarIndData = (title) => {
    return api.get(`/titel/${title}?fulltext=true&fields=title,discraption,experience,keyskills,rolesresponsibilities,PerksandBenefits,salary,location,Jobtype,postingdate,deadline,Workinghrs,Workingdays,vacancy,flags`);
}

// export const jobesGetData = () => {
//     {
//         JoboCardData.map((jobData) => {
//             const {title, discraption, experience,keyskills,
//             rolesresponsibilities,PerksandBenefits,salary,location,
//             Jobtype,postingdate,deadline,Workinghrs,Workingdays,vacancy, flags } = jobesIndData;
//         })
//     }
// }