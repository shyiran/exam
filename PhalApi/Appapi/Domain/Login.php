<?php


class Domain_Login {


    public function userLogin($user_login){
        $model = new Model_Login();

        $info=$model->getinfo($user_login);

        if(!$info){
            $data=array(
                'user_login' => $user_login,
                'mobile' =>$user_login,
                'user_nickname' =>$user_login,
                'signature' =>'这家伙很懒，什么都没留下',
                'avatar' =>'/default.jpg',
                'last_login_ip' =>$_SERVER['REMOTE_ADDR'],
                'create_time' => time(),
                'user_status' => 1,
                "user_type"=>2,//会员
                "partybranch"=>'',
                "partypost"=>'',
            );

            $isexist=$model->checkinfo($user_login);
            if($isexist){
                return 1006;
            }

            $rs=$model->insertuser($data);
            if(!$rs){
                return 1007;
            }
            $info=$model->getinfo($user_login);
        }

        $token=md5(md5($info['id'].$user_login.time()));
        $info['token']=$token;
        $info['avatar']=get_upload_path($info['avatar']);
        $this->updateToken($info['id'],$token);
        return $info;
    }

    public function login($user_login,$pass) {

        $model = new Model_Login();

        $info=$model->getinfo($user_login);

        if(!$info || $info['user_pass']!= setPass($pass)){
            return 1002;
        }

        $token=md5(md5($info['id'].$user_login.time()));
        $info['token']=$token;
        $info['avatar']=get_upload_path($info['avatar']);
        $this->updateToken($info['id'],$token);
        return $info;

    }

    /* 更新token 登陆信息 */
    public function updateToken($uid,$token,$data=array()) {
        $model = new Model_Login();
        $expiretime=time()+60*60*24*300;
        $where = ['user_id'=>$uid];
        $data = ["user_id"=>$uid,"token"=>$token, "expire_time"=>$expiretime ];
        $model->changetoken($where,$data);
        $timedata=array('last_login_time' => time(), "last_login_ip"=>$_SERVER['REMOTE_ADDR'] );
        $model->changelogintime($uid,$timedata);
        $token_info=array(
            'uid'=>$uid,
            'token'=>$token,
            'expiretime'=>$expiretime,
        );
        setcaches("token_".$uid,$token_info);
        return 1;
    }
    /* 找回密码 */
    public function userFindPass($uid,$user_pass){
        $model = new Model_Login();

        $isexist=$model->getUserInfo(['id' => $uid]);
        if(!$isexist){
            return 1006;
        }
        $user_pass=setPass($user_pass);

        return $model->updatepass($isexist['id'],$user_pass);

    }


    //注册
    public function userReg($user_login, $user_pass, $user_nickname, $partybranch)
    {

        $rs = array('code' => 0, 'msg' => T('注册成功'), 'info' => array());
        /* 注册 */
        $nickname = $user_nickname ? $user_nickname : T('用户') . substr($user_login, -3);
        $data     = array(
            'user_login'    => $user_login,
            'user_pass'     => setPass($user_pass),
            'user_nickname' => $nickname,
            'mobile'        => $user_login,
            'avatar'        => '/default.jpg',
            'partybranch'   => $partybranch,
            'user_type'     => 2,
        );
        $model    = new Model_Login();
        $info     = $model->userReg($data);

        if (!$info) {
            $rs['msg'] = T('注册失败');
            $rs['code'] = 992;
            return $rs;
        }

        return $rs;
    }



}
