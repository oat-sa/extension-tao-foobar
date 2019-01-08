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
 * Copyright (c) 2019 (original work) Open Assessment Technologies SA;
 *               
 * 
 */

namespace oat\taoForce\controller;

/**
 * Force controller
 *
 * @author Open Assessment Technologies SA - Jonathan VUILLEMIN
 * @package taoForce
 * @license GPL-2.0
 *
 */
class TaoForce extends \tao_actions_CommonModule
{
    /**
     * Force controller
     */
    public function index()
    {
        $this->setData('message', 'May the force be with you');
        $this->setView('TaoForce/templateExample.tpl');
    }
}