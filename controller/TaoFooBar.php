<?php
namespace oat\taoFooBar\controller;

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
 * Copyright (c) 2014-2021 (original work) Open Assessment Technologies SA;
 */

/**
 * Sample controller
 *
 * @author Open Assessment Technologies SA
 * @package taoFooBar
 * @license GPL-2.0
 *
 */
class TaoFooBar extends \tao_actions_CommonModule {

    /**
     * initialize the services
     */
    public function __construct(){
        parent::__construct();
    }

    /**
     * A possible entry point to foobar
     */
    public function index() {
        $this->response = $this->getPsrResponse()->withBody(\GuzzleHttp\Psr7\stream_for(__('Hello World')));
    }

    public function templateExample() {
        $this->setData('author', 'Open Assessment Technologies SA');
        $this->setView('templates/foobar.tpl');
    }
    
}

