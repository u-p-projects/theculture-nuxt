#REMOTE HOST
remotehost = 149.28.164.204

#SERVER HOST NAME
remoteuser = root

#REMOTE DIRECTORY PATH
remotedir = /var/www/theculture

#RSYNC OPTIONS
flags = -r -c -u -z -P -h -i -v -a
excludes = --exclude '.DS_Store'

# Production
deploy:
	@echo "\033[0;31mBuilding production assets...\033[0m"
	pnpm run generate
	@echo "\033[0;31mBuild complete.\033[0m"
	@echo "\033[0;31mDeploying Frontend...\033[0m"
	rsync $(flags) $(excludes) dist/ $(remoteuser)@$(remotehost):$(remotedir)
	@echo "\033[0;31mDeploy complete.\033[0m"
