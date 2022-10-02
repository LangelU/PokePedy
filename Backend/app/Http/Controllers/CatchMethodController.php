<?php

namespace App\Http\Controllers;

use App\Models\CatchMethod;
use Illuminate\Http\Request;

class CatchMethodController extends Controller {

    public function __construct(){
        $this->CatchMethod = new CatchMethod();
    }

    public function index() {
        $catchMethods = $this->CatchMethod->getCatchMethods();
        return $catchMethods;
    }


    public function create() {
        //
    }


    public function store(Request $request) {
        $catchMethodResponse = $this->CatchMethod->createCatchMethod($request);
        return($catchMethodResponse);
    }

    public function show($id) {
        $catchMethodResponse = $this->CatchMethod->getCatchMethod($id);
        return ($catchMethodResponse);
    }

    public function edit($catchMethod) {
        //
    }

    public function update(Request $request, $id) {
        $updateCatchMethodReponse = $this->CatchMethod->updateCatchMethod($request, $id);
        return ($updateCatchMethodReponse);
    }

    public function destroy($id) {
        $deleteCatchMethodReponse = $this->CatchMethod->deleteCatchMethod($id);
        return ($deleteCatchMethodReponse);
    }
}
