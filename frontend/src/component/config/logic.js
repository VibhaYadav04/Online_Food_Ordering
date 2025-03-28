// export const isPresentInFavorites=(favorites, restaurant)=>{
//     for(let item of favorites){
//         if(restaurant.id === item.id){
//             return true;
//         }
//     }
//     return false;
// }

export const isPresentInFavorites = (favorites = [], restaurant) => {
    if (!Array.isArray(favorites)) return false; // Ensure it's an array
    for (let item of favorites) {
        if (restaurant.id === item.id) {
            return true;
        }
    }
    return false;
};
