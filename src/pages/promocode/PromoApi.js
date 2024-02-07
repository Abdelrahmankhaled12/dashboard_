import { PROMOCODE_API } from "../../utils/api";

export const SendPromoCodeApi = (promoCode, discount, startDate, endDate) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('promocode', promoCode);
        formData.append('started_at', startDate);
        formData.append('expired_at', endDate);
        formData.append('discount', discount);

        fetch(PROMOCODE_API, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};