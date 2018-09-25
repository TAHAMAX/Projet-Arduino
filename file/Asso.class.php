<?php
    Class Asso
    {
        public $name;
        public $firstname;
		public $society;
        public $question;
        
           
        

        public function __construct( $name, $firstname, $society, $question )
        {
            $this->name = $name;
            $this->firstname = $firstname;
            $this->society = $society;
            $this->question = $question;
            
        }

        public function bdd(){
            $pdo = new PDO('mysql:host=localhost;dbname=tous_au_numerique', 'segond', 'loudmila32');
            $req = $pdo->query('INSERT INTO visiteur (nom, prenom, societe, question) 
                    VALUES ("' . $this->name .'" , "' . $this->firstname .'" , "' . $this->society .'" , "' . $this->question .'")');
        }
    }
?>