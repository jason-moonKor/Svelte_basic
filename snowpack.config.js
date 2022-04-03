module.exports = {
	mount: {
		public: "/",
		src: "/dist"
	},
	plugins: ["@snowpack/plugin-svelte"],
	alias: {
		"~": "./src"
	},
	devOptions: {
		port: 8081 //기본포트가 8080
		//open:"none" //개발서버를 열면 브라우저가 자동으로 열리는기능 "none" 은 자동으로 안열림
	}
};
