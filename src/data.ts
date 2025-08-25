const env = `
DB_NAME='[site-name]'
DB_USER='root'
DB_PASSWORD=''

# Optionally, you can use a data source name (DSN)
# When using a DSN, you can remove the DB_NAME, DB_USER, DB_PASSWORD, and DB_HOST variables
# DATABASE_URL='mysql://database_user:database_password@database_host:database_port/database_name'

# Optional database variables
# DB_HOST='localhost'
# DB_PREFIX='wp_'

WP_ENV='development'
WP_HOME='http://[site-name].com.me/'
WP_SITEURL="{WP_HOME}/wp"

# Theme Name
THEME_NAME='theme_name'

# WP Media Offload
AS3CF_KEY_ID='12a8a2b738ad9a4c65f8ea1e039313cb'
AS3CF_ACCESS_KEY='943917c57dbcce20128caef11ec4d0b2d89c2c01309798fed23164bc322c7c66'
AS3CF_BUCKET='cdn-agentimagehosting-com'
AS3CF_REGION='wnam'
AS3CF_ENDPOINT='https://81648e2f7aa1fd11720e39741c358edb.r2.cloudflarestorage.com'
AS3CF_DELIVERY='cloudflare'
AS3CF_DELIVERY_DOMAIN='cdn.agentimagehosting.com'

# License Keys
WPMDB_LICENCE='15815fdc-4619-4814-a1fe-9b0cb321b103'
AS3CFPRO_LICENCE='a50cb14b-01a9-4939-9ef2-74a00279b008'

# Specify optional debug.log path
# WP_DEBUG_LOG='/path/to/debug.log'

# Generate your keys here: https://roots.io/salts.html
AUTH_KEY=
SECURE_AUTH_KEY=
LOGGED_IN_KEY=
NONCE_KEY=
AUTH_SALT=
SECURE_AUTH_SALT=
LOGGED_IN_SALT=
NONCE_SALT=
`;

export default env;