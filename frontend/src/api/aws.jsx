import axios from "axios"

export const uploadImage = async (img) => {

    let imgURL = null;
    await axios.get("http://localhost:3000/api/get-upload-url")
        .then(async ({ data: { uploadURL } }) => {
            await axios({
                method: 'PUT',
                url: uploadURL,
                headers: { 'Content-Type': 'multipart/form-data' },
                data: img
            })
                .then(() => {
                    imgURL = uploadURL.split("?")[0]
                }).catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        })

    return imgURL;

} 