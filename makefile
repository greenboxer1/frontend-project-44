install:
	npm ci

publish: 
	npm publish --dry-run
	sudo npm link

brain-games:
	node bin/brain-games.js

lint:
	npx eslint . --fix
	npx eslint .

rec:
	asciinema rec

st: 
	exit