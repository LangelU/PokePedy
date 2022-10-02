<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Traits\ResponseAction;
use Illuminate\Database\Eloquent\SoftDeletes;

class CatchMethod extends Model
{
    use HasFactory, ResponseAction, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'catch_methods';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'method'
    ];

    //** Relationships config **/

    //** End relationships config**/

    //** Scopes config **/

    public function scopeWhereName($query, $value) {
        if (!is_null($value))
            $query->where('method', $value);
    }

    //** End scopes config **/

    //** Logic **/

    Public function validate($request, $action = null){
        return Validator::make(
            $request->all(),
            [
                'method' => ['required', 'unique:catch_methods']
            ]
        );
    }


    public function createCatchMethod($request){
        $validator = $this->validate($request);
        if ($validator->fails()) {
            return $this->response(409, 'Error', 'Could not create capture method.', $validator->errors()->first(), null);
        } else {
            try {
                $newCatchMethod = $this::create([
                    'method' => $request->method
                ]);
                return $this->response(201, 'success', 'Catch method created successfully.', null, $newCatchMethod);
            } catch (\Exception $e) {
                return $this->response(500, 'Internal error', 'Internal error', $e->getMessage() , null);
            }
        }
    }

    public function getCatchMethods(){
        $catchMethods = $this::all();
        if ($catchMethods->isEmpty()) {
            return $this->response(404, 'error', 'Cath methods not found', 'The catch methods table are empty', null );
        } else {
            return $this->response(200, 'success', 'Catch methods found', null, $catchMethods);
        }
    }

    public function getCatchMethod($id){
        $catchMethod = $this::find($id);
        if (is_null($catchMethod)) {
            return $this->response(404, 'error', 'Catch method not found', 'The catch method does not exist in the database', null);
        } else {
            return $this->response(200, 'success', 'Catch method found', null, $catchMethod);
        }
    }

    public function updateCatchMethod($request, $id){
        $validator = $this->validate($request);
        if ($validator->fails()) {
            return $this->response(409, 'Error', 'Could not update capture method.', $validator->errors()->first(), null);
        } else {
            try {
                $catchMethod = $this::find($id);
                if (is_null($catchMethod)){
                    return $this->response(404, 'error', 'Catch method not found', 'The catch method does not exist in the database', null);
                } else {
                    $catchMethod->update([
                        'method' => $request->method ?? $catchMethod->method
                    ]);
                }
                return $this->response(201, 'success', 'Catch method updted successfully.', null, $catchMethod);
            } catch (\Exception $e) {
                return $this->response(500, 'Internal error', 'Internal error', $e->getMessage() , null);
            }
        }
    }

    public function deleteCatchMethod($id){
        $catchMethod = $this::find($id);
        if (is_null($catchMethod)){
            return $this->response(404, 'error', 'Catch method not found', 'The catch method does not exist in the database', null);
        } else {
            $catchMethod->delete();
            return $this->response(200, 'success', 'Catch Method deleted successfully', null, null);
        }
    }
    //** End logic **/
}