import news from "../data";

const News = {
    render() {

        return /* html */`
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
        <div class="grid gap-4 grid-cols-3">
            ${news.map((post) => `
            <div class="border border-sky-500 p-4">
                <a href="/news/${post.id}"><img src="${post.img}" class="w-full h-72 transform hover: transition duration-500 hover:scale-[1.1] overflow-hidden" /></a>
                <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg hover:text-green-500 transition duration-600 ease-in">${post.title}</a></h3>
                <p class="text-justify not-italic text-base hover:text-green-500 transition duration-600 ease-in">${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Chào buổi sáng</h2>
        <div class="grid gap-4 grid-cols-3">
            ${news.map((post) => `
            <div class="border border-sky-500 p-4">
                <a href="/news/${post.id}"><img src="${post.img}" class="w-full h-72 transform hover: transition duration-500 hover:scale-[1.1] overflow-hidden" /></a>
                <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg hover:text-green-500 transition duration-600 ease-in">${post.title}</a></h3>
                <p class="text-justify not-italic text-base hover:text-green-500 transition duration-600 ease-in">${post.desc}</p>
            </div>
            `).join("")}
        </div>
        `;
    },
};
export default News;