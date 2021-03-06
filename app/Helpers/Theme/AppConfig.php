<?php
namespace App\Helpers\Theme; 

use Config;

class AppConfig
{
    /**
     * Returns the URL to the specified view layout from the layouts directory of the current active theme
     *
     * @param string $layoutFile name of the layout file (from the layouts directory) to be used as layout
     */
    public static function themeLayout($layoutFile)
    {
        return Config::get('app.theme') . '.layouts.' . $layoutFile;
    }

    /**
     * Returns the app name from the .env file
     *
     */
    public static function name()
    {
        return Config::get('app.name');
    }
}