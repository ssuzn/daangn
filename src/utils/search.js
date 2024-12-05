import axios from "axios";

export const getSearch = async () => {
    try {
        const response = await axios({
            method: "get",
            url: "/dummy-post.json", // 원래는 api url
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("데이터 불러오기 오류: ", error);
        return [];
    }
};