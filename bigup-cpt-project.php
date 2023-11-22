<?php
namespace BigupWeb\CPT_Project;

/**
 * Plugin Name:       Bigup Web: Custom Post Type - Project
 * Description:       A custom 'Projects' post type with custom meta fields.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Jefferson Real
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bigup-cpt-project
 *
 * @package           bigup-cpt-project
 * @link              https://kinsta.com/blog/dynamic-blocks/
 * @link              https://kinsta.com/blog/wordpress-add-meta-box-to-post/
 * @link              https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 */

// Define constants.
define( 'CPTPRO_DEBUG', defined( 'WP_DEBUG' ) && WP_DEBUG === true );
define( 'CPTPRO_DIR', trailingslashit( __DIR__ ) );
define( 'CPTPRO_URL', trailingslashit( get_site_url( null, strstr( __DIR__, '/wp-content/' ) ) ) );

// Setup PHP namespace.
require_once CPTPRO_DIR . 'classes/autoload.php';

// Setup this plugin.
$Init = new Init();
$Init->setup();
