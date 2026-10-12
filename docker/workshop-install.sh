#!/usr/bin/env bash
set -euo pipefail

marker="/var/www/moodledata/.workshop-installed"

if [[ ! -f "${marker}" ]]; then
    php /var/www/html/admin/cli/install_database.php \
        --agree-license \
        --adminuser=admin \
        --adminpass="${MOODLE_ADMIN_PASSWORD}" \
        --adminemail='admin@example.invalid' \
        --fullname='Moodle Workshop todo' \
        --shortname='Workshop'
    touch "${marker}"
fi

php /var/www/html/admin/cli/upgrade.php --non-interactive
php /var/www/html/admin/cli/purge_caches.php
