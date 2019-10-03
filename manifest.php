<?php
/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2017 Open Assessment Technologies SA (under the project TAO-PRODUCT);
 *
 */

$extpath = dirname(__FILE__).DIRECTORY_SEPARATOR;
$taopath = dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR.'tao'.DIRECTORY_SEPARATOR;

return [
    'name' => 'taoFooBar',
    'label' => 'FooBar power extension',
    'description' => 'Dummy test extension',
    'license' => 'GPL-2.0',
    'version' => '1.4.3',
    'author' => 'Open Assessment Technologies, CRP Henri Tudor',
    'requires' => [
        'tao' => '>=21.0.1'
    ],
    'models' => [
        'http://www.tao.lu/Ontologies/TAOFooBar.rdf'
    ],
    'install' => [],
    'update' => "oat\\taoFooBar\\scripts\\update\\Updater",
    'managementRole' => 'http://www.tao.lu/Ontologies/TAO.rdf#FooBarsManagerRole',
    'acl' => [
        ['grant', 'http://www.tao.lu/Ontologies/TAOFooBar.rdf#FooBarsManagerRole', ['ext'=>'taoFooBar']]
    ],
    'routes' => [
        '/taoFooBar' => 'oat\\taoFooBar\\controller'
    ],
    'constants' => [
        # actions directory
        "DIR_ACTIONS"         => $extpath."actions".DIRECTORY_SEPARATOR,

        # views directory
        "DIR_VIEWS"           => $extpath."views".DIRECTORY_SEPARATOR,

        # default module name
        'DEFAULT_MODULE_NAME' => 'FooBar',

        #default action name
        'DEFAULT_ACTION_NAME' => 'index',

        #BASE PATH: the root path in the file system (usually the document root)
        'BASE_PATH'           => $extpath,

        #BASE URL (usually the domain root)
        'BASE_URL'            => ROOT_URL	.'taoFooBar/',
    ]
];
