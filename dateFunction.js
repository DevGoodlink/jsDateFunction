function diff(d1, d2) {
			    var dd=new Date(d1);
			    var df= new Date(d2);
			  
			    var an=df.getUTCFullYear()-dd.getUTCFullYear();
			    var mois = df.getUTCMonth()-dd.getUTCMonth();
			    var jour=df.getDate()-dd.getDate();
			    
			    if (jour<0) {
			    	mois--;
			    	jour+=30;
			   	}

			   	if(mois<0){
			   		an--;
			   		mois+=12;
			   	}
			   	if(an==0 && mois==0 && jour>0)
			   		return " "+jour+" jours.";
			   	if(an==0 && mois>0 && jour==0)
			   		return " "+mois+" mois.";
			   	if(an==0 && mois>0 && jour>0)
			   		return " "+mois +" mois et "+jour +" jours.";
			   	if(an>0 && mois==0 && jour==0)
			   		return " "+an+" années."
			   	if (an>0 && mois==0 && jour>0)
			   		return " "+an+" années et "+jour+ " jours.";
			   	if(an>0 && mois>0 && jour==0)
			   		return " "+an+" année et "+mois+ " mois.";
			    if(an>0 && mois>0 && jour>0)
			    	return " "+an+" années et "+ mois+ " mois et "+jour+" jours.";

    }