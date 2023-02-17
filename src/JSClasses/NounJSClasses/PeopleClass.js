
export class Noun  {
    constructor (sing, plural, status){
    this.noun_pair = [sing, plural];
  
    this.sing = sing;
    this.si_trl = "";
    this.si_trl2 = "";
  
    this.plural = plural;
    this.pl_trl = "";
  
    this.showMenu="hide"
  
    this.being_si=[
      "the " + this.sing + " is",
      "the " + this.sing + " is good",
      "the " + this.sing + " is bad",
      "there is a " +this.sing,
      'there is no '+this.sing 
    ]    
    this.being_pl=[
      "the " + this.plural + " are",
      "the " + this.plural + " are good",
      "the " + this.plural + " are bad",
      "there are " +this.plural,
      'there are no '+this.plural 
    ]
  
    this.detailsArr_si=[]
    this.detailsArr_pl=[]
    this.detailsArr_si.push({title:"Phrases of Being", details: this.being_si, name: "being_si"})
    this.detailsArr_pl.push({title:"Phrases of Being", details: this.being_pl, name: "being_pl"})
  
    if(status === 'h'){ 
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking him / her (the " +this.sing+")",
        "You're taking him / her (the " +this.sing+")", 
        "He / She is taking him / her (the " +this.sing+")", 
        "We are taking him / her (the " +this.sing+")",
        "You all are taking him / her (the " +this.sing+")",
        "They are taking him / her (the " +this.sing+")",
        "The " + this.sing + " is not taking",
        "I'm not taking him / her (the " +this.sing+")",
        "You're not taking him / her (the " +this.sing+")", 
        "He / She is not taking him / her (the " +this.sing+")", 
        "We are not taking him / her (the " +this.sing+")",
        "You all are not taking him / her (the " +this.sing+")",
        "They are not taking him / her (the " +this.sing+")",
        
      ]
    }else if(status === 'm'){
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking him (the " +this.sing+")",
        "You're taking him (the " +this.sing+")", 
        "He / She is taking him (the " +this.sing+")", 
        "We are taking him (the " +this.sing+")",
        "You all are taking him (the " +this.sing+")",
        "They are taking him (the " +this.sing+")",
        "The " + this.sing + " is not taking",
        "I'm not taking him (the " +this.sing+")",
        "You're not taking him (the " +this.sing+")", 
        "He / She is not taking him (the " +this.sing+")", 
        "We are not taking him (the " +this.sing+")",
        "You all are not taking him (the " +this.sing+")",
        "They are not taking him (the " +this.sing+")",
        
      ]
    }else if(status === 'f'){
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking her (the " +this.sing+")",
        "You're taking her (the " +this.sing+")", 
        "He / She is taking her (the " +this.sing+")",
        "We are taking her (the " +this.sing+")",
        "You all are taking her (the " +this.sing+")",
        "They are taking her (the " +this.sing+")",
        "The " + this.sing + " is not taking",
        "I'm not taking her (the " +this.sing+")",
        "You're not taking her (the " +this.sing+")", 
        "He / She is not taking her (the " +this.sing+")",
        "We are not taking her (the " +this.sing+")",
        "You all are not taking her (the " +this.sing+")",
        "They are not taking her (the " +this.sing+")",
         
      ]
    }else{
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking it (the " +this.sing+")",
        "You're taking it (the " +this.sing+")", 
        "He / She is taking it (the " +this.sing+")", 
        "We are taking it (the " +this.sing+")",
        "You all are taking it (the " +this.sing+")",
        "They are taking it (the " +this.sing+")",
        "The " + this.sing + " is not taking",
        "I'm not taking it (the " +this.sing+")",
        "You're not taking it (the " +this.sing+")", 
        "He / She is not taking it (the " +this.sing+")",
        "We are not taking it (the " +this.sing+")",
        "You all are not taking it (the " +this.sing+")",
        "They are not taking it (the " +this.sing+")",
         
      
      ]
    }
    
      this.taking_pl=[
        "The " + this.plural + " are taking",
        "I'm taking them (the " +this.plural+")",
        "You're taking them (the " +this.plural+")", 
        "He / She is taking them (the " +this.plural+")",
        "We are taking them (the " +this.plural+")",
        "You all are taking them (the " +this.plural+")",
        "They are taking them (the " +this.plural+")", 
        "The " + this.plural + " are not taking",
        "I'm not taking them (the " +this.plural+")",
        "You're not taking them (the " +this.plural+")", 
        "He / She is not taking them (the " +this.plural+")",
        "We are not taking them (the " +this.plural+")",
        "You all are not taking them (the " +this.plural+")",
        "They are not taking them (the " +this.plural+")",
         
      
      ]
      
      this.detailsArr_si.push({title:"Phrases of Taking", details: this.taking_si, name:"taking_si"})
      this.detailsArr_pl.push({title:"Phrases of Taking", details: this.taking_pl, name:"taking_pl"})
     
    if(status === 'h'){ 
      this.giving_si=[
        "The "+this.sing + " is giving",
        "I'm giving him / her (the " +this.sing+")",
        "You're giving him / her (the " +this.sing+")", 
        "He / She is giving him / her (the " +this.sing+")",
        "We are giving him / her (the " +this.sing+")",
        "You all are giving him / her (the " +this.sing+")",
        "They are giving him / her (the " +this.sing+")",
        
        "The "+ this.sing + " is not giving",
        "I'm not giving him / her (the " +this.sing+")",
        "You're not giving him / her (the " +this.sing+")", 
        "He / She is not giving him / her (the " +this.sing+")", 
        "We are not giving him / her (the " +this.sing+")",
        "You all are not giving him / her (the " +this.sing+")",
        "They are not giving him / her (the " +this.sing+")",
        
      ]
    }else if(status === 'm'){
      this.giving_si=[
        "The "+this.sing + " is giving",
        "I'm giving him (the " +this.sing+")",
        "You're giving him (the " +this.sing+")", 
        "He / She is giving him (the " +this.sing+")",
        "We are giving him (the " +this.sing+")",
        "You all are giving him (the " +this.sing+")",
        "They are giving him (the " +this.sing+")",
        
        "The "+ this.sing + " is not giving",
        "I'm not giving him (the " +this.sing+")",
        "You're not giving him (the " +this.sing+")", 
        "He / She is not giving him (the " +this.sing+")", 
        "We are not giving him (the " +this.sing+")",
        "You all are not giving him (the " +this.sing+")",
        "They are not giving him (the " +this.sing+")",
        
      ]
    }else if(status === 'f'){
      this.giving_si=[
        "The "+this.sing + " is giving",
        "I'm giving her (the " +this.sing+")",
        "You're giving her (the " +this.sing+")", 
        "He / She is giving her (the " +this.sing+")",
        "We are giving her (the " +this.sing+")",
        "You all are giving her (the " +this.sing+")",
        "They are giving her (the " +this.sing+")",
         
        "The "+ this.sing + " is not giving",
        "I'm not giving her (the " +this.sing+")",
        "You're not giving her (the " +this.sing+")", 
        "He / She is not giving her (the " +this.sing+")", 
        "We are not giving her (the " +this.sing+")",
        "You all are not giving her (the " +this.sing+")",
        "They are not giving her (the " +this.sing+")",
        
      ]
    }else{
      this.giving_si=[
        "The "+this.sing + " is gving",
        "I'm giving it (the " +this.sing+")",
        "You're giving it (the " +this.sing+")", 
        "He / She is giving it (the " +this.sing+")",
        "We are giving it (the " +this.sing+")",
        "You all are giving it (the " +this.sing+")",
        "They are giving it (the " +this.sing+")",
         
        "The "+ this.sing + " is not giving",
        "I'm not giving it (the " +this.sing+")",
        "You're not giving it (the " +this.sing+")", 
        "He / She is not giving it (the " +this.sing+")", 
        "We are not giving it (the " +this.sing+")",
        "You all are not giving it (the " +this.sing+")",
        "They are not giving it (the " +this.sing+")",
        
      ]
    } 
      this.giving_pl=[
        "The "+this.plural + " are giving",
        "I'm giving them (the " +this.plural+")",
        "You're giving them (the " +this.plural+")", 
        "He / She is giving them (the " +this.plural+")", 
        "We are giving them (the " +this.plural+")",
        "You all are giving them (the " +this.plural+")",
        "They are giving them (the " +this.plural+")",
        
        "The "+ this.plural + " are not giving",
        "I'm not giving them (the " +this.plural+")",
        "You're not giving them (the " +this.plural+")", 
        "He / She is not giving them (the " +this.plural+")",   
        "We are not giving them (the " +this.plural+")",
        "You all are not giving them (the " +this.plural+")",
        "They are not giving them (the " +this.plural+")",
       
      ]
      
    this.detailsArr_si.push({title:"Phrases of Giving", details: this.giving_si, name:"giving_si"})
    this.detailsArr_pl.push({title:"Phrases of Giving", details: this.giving_pl, name:"giving_pl"})
  
      this.demon_si = [
        "this " + this.sing,
        "that (close) " + this.sing,
        "that (far) " + this.sing,
        "not this " + this.sing,
        "not that (close) " + this.sing,
        "not that (far) " + this.sing,
      ]
  
      this.demon_si_trl=[]
  
      this.demon_pl = [
        "this " + this.plural,
        "that (close) " + this.plural,
        "that (far) " + this.plural,
        "not this " + this.plural,
        "not that (close) " + this.plural,
        "not that (far) " + this.plural,
      
      ]
  
      this.demon_pl_trl=[]
      
        
    this.detailsArr_si.push({title:"Demonstratives", details: this.demon_si, name:"demon_si"})
    this.detailsArr_pl.push({title:"Demonstratives", details: this.demon_pl, name:"demon_pl"})
  
      this.basic_poss = [
        "my",
        "your",
        "his / her",
        "of (one)",
        "our",
        "yalls",
        "their",
        "of (many)"
      ];
    
      this.poss_si = [];
    
      this.basic_poss.map((poss, index) => {
        if (index === 3 || index === 7) {
            this.poss_si.push(
              this.sing + " " + poss,
            )
        } else {
            this.poss_si.push(
              poss + " " + this.sing,
            )
          
        }
        return index
      });
    
      this.poss_pl = [];
    
      this.basic_poss.map((poss, index) => {
        if (index === 3 || index === 7) {
          return(
            this.poss_pl.push(
              this.plural + " " + poss,  
            )
          )
        } else {
            return(
              this.poss_pl.push(
                poss + " " + this.plural,  
              )
          )
        }
      });
      
    this.detailsArr_si.push({title:"Possesives", details: this.poss_si, name:"poss_si"})
    this.detailsArr_pl.push({title:"Possesives", details: this.poss_pl, name:"poss_pl"})
    
    this.basic_condition=[
      "good",
      "bad",
      "okay",
    ]
    this.condition_si=[]
    this.basic_condition.map((cond, index) => {
        return(
          this.condition_si.push(
            cond + " " + this.sing   
          )
        )
    })
    this.condition_pl=[]
    this.basic_condition.map((cond, index) => {
        return(
          this.condition_pl.push(
            cond + " " + this.plural  
          )
        )
    })
    
    this.detailsArr_si.push({title:"Phrases of Condition", details: this.condition_si, name:"condition_si"})
    this.detailsArr_pl.push({title:"Phrases of Condition", details: this.condition_pl, name:"condition_pl"})
      
    this.size_si=[
      "big "+this.sing,
      "small "+this.sing,
      "medium "+this.sing,
      "tall "+this.sing,
      "short "+this.sing,
      "wide "+this.sing,
      "narrow "+this.sing,
      "thick "+this.sing,
      "thin "+this.sing,
    ]
  
    this.size_pl=[
      "big "+this.plural,
      "small "+this.plural,
      "medium "+this.plural,
      "tall "+this.plural,
      "short "+this.plural,
      "wide "+this.plural,
      "narrow "+this.plural,
      "thick "+this.plural,
      "thin "+this.plural,
    
    ]
  
      this.detailsArr_si.push({title:"Phrases of Size", details: this.size_si, name:"size_si"})
      this.detailsArr_pl.push({title:"Phrases of Size", details: this.size_pl, name:"size_pl"})
      
    this.basic_age=[
      "old",
      "young",
      "older",
      "younger",
    ]
    this.age_si=[]
    this.basic_age.map((age, index) => {
        return(
          this.age_si.push(
            age + " " + this.sing   
          )
        )
    })
    this.age_pl=[]
    this.basic_age.map((age, index) => {
      return(
        this.age_pl.push(
          age + " " + this.plural   
        )
      )
    }) 
    
    this.detailsArr_si.push({title:"Phrases of Age", details: this.age_si, name:"age_si"})
    this.detailsArr_pl.push({title:"Phrases of Age", details: this.age_pl, name:"age_pl"})
   
    this.basic_quantity_si=[
      "only",
      "some",
      "any",
    ]
    this.quantity_si=[]
    this.basic_quantity_si.map((quant, index) => {
        return(
          this.quantity_si.push(
            quant + " " + this.sing   
          )
        )
    })
    this.basic_quantity_pl=[
      "no",
      "only",
      "few",
      "some",
      "many",
      "most",
      "all",
    ]
    this.quantity_pl=[]
    this.basic_quantity_pl.map((quant, index) => {
      return(
        this.quantity_pl.push(
          quant + " " + this.plural   
        )
      )
    }) 
  
    this.detailsArr_si.push({title:"Phrases of Quantity", details: this.quantity_si, name:"quantity_si"})
    this.detailsArr_pl.push({title:"Phrases of Quantity", details: this.quantity_pl, name:"quantity_pl"})
  
    this.basic_order=[
      "first",
      "last",
      "next",
      "previous",
    ]
    this.order_si=[]
    this.basic_order.map((ord, index) => {
        return(
          this.order_si.push(
            ord + " " + this.sing   
          )
        )
    })
    this.order_pl=[]
    this.basic_order.map((ord, index) => {
      return(
        this.order_pl.push(
          ord + " " + this.plural   
        )
      )
    })
     
    this.detailsArr_si.push({title:"Phrases of Order", details: this.order_si, name:"order_si"})
    this.detailsArr_pl.push({title:"Phrases of Order", details: this.order_pl, name:"order_pl"})
  
    this.basic_compare=[
      "same",
      "different",
      "other",
    ]
    this.compare_si=[]
    this.basic_compare.map((comp, index) => {
        return(
          this.compare_si.push(
            comp + " " + this.sing   
          )
        )
    })
    this.compare_pl=[]
    this.basic_compare.map((comp, index) => {
      return(
        this.compare_pl.push(
          comp + " " + this.plural   
        )
      )
    })
  
    this.detailsArr_si.push({title:"Phrases of Comparision", details: this.compare_si, name:"compare_si"})
    this.detailsArr_pl.push({title:"Phrases of Comparision", details: this.compare_pl, name:"compare_pl"})
  
    this.basic_race=[
      "black",
      "white",
      "Asian",
      "Hispanic",
      "Indian",
      "Middle Eastern",
      "Native American",
    ]
    this.race_si=[]
    this.basic_race.map((race, index) => {
        return(
          this.race_si.push(
            race + " " + this.sing   
          )
        )
    })
    this.race_pl=[]
    this.basic_race.map((race, index) => {
      return(
        this.race_pl.push(
          race + " " + this.plural   
        )
      )
    })
  
    
    
    this.detailsArr_si.push({title:"Phrases of Race", details: this.race_si, name:"race_si"})
    this.detailsArr_pl.push({title:"Phrases of Race", details: this.race_pl, name:"race_pl"})
  
  
    this.basic_appearance=[
      "fat",
      "skinny",
      "muscular",
      "beautiful",
      "handsome",
      "ugly",
    ]
    this.appear_si=[]
    this.basic_appearance.map((appear, index) => {
        return(
          this.appear_si.push(
            appear + " " + this.sing   
          )
        )
    })
    this.appear_pl=[]
    this.basic_appearance.map((appear, index) => {
      return(
        this.appear_pl.push(
          appear + " " + this.plural   
        )
      )
    })
  
    
    this.detailsArr_si.push({title:"Phrases of Appearance", details: this.appear_si, name:"appear_si"})
    this.detailsArr_pl.push({title:"Phrases of Appearance", details: this.appear_pl, name:"appear_pl"})
  
    this.basic_athletics=[
      "strong",
      "weak",
      "fast",
      "slow",
    ]
    this.athletics_si=[]
    this.basic_athletics.map((athlet, index) => {
        return(
          this.athletics_si.push(
            athlet + " " + this.sing   
          )
        )
    })
    this.athletics_pl=[]
    this.basic_athletics.map((athlet, index) => {
      return(
        this.athletics_pl.push(
          athlet + " " + this.plural   
        )
      )
    })
  
    this.detailsArr_si.push({title:"Phrases of Athleticism", details: this.athletics_si, name:"athletics_si"})
    this.detailsArr_pl.push({title:"Phrases of Athleticism", details: this.athletics_pl, name:"athletics_pl"})
    
    this.trl=[]  
    this.detailsArr_pl[(0)]
    .details.map((b, index2)=>(
      this.trl.push(b)
    ))
  
  }
}
  const Person = new Noun("person", "people",'h')
  const Man = new Noun("man", "men","m")
  const Woman = new Noun("woman", "women","f")
  const Child = new Noun("child", "children","h")
  const Boy = new Noun("boy", "boys","m")
  const Girl = new Noun("girl", "girls","f")
  const Baby = new Noun("baby", "babies","h") 
  let nouns1=
    [
      {nounTitle: Person.sing, nounDetails: Person.detailsArr_si},
      {nounTitle: Person.plural, nounDetails: Person.detailsArr_pl},
      {nounTitle: Man.sing, nounDetails: Man.detailsArr_si},
      {nounTitle: Man.plural, nounDetails: Man.detailsArr_pl},
      {nounTitle: Woman.sing, nounDetails: Woman.detailsArr_si},
      {nounTitle: Woman.plural, nounDetails: Woman.detailsArr_pl},
      {nounTitle: Child.sing, nounDetails: Child.detailsArr_si},
      {nounTitle: Child.plural, nounDetails: Child.detailsArr_pl},
      {nounTitle: Boy.sing, nounDetails: Boy.detailsArr_si},
      {nounTitle: Boy.plural, nounDetails: Boy.detailsArr_pl},
      {nounTitle: Girl.sing, nounDetails: Girl.detailsArr_si},
      {nounTitle: Girl.plural, nounDetails: Girl.detailsArr_pl},
      {nounTitle: Baby.sing, nounDetails: Baby.detailsArr_si},
      {nounTitle: Baby.plural, nounDetails: Baby.detailsArr_pl},
    ]
  const sub_category1={sub_title: "Types of People", nouns: nouns1, status:"hide"}
  
  const Family = new Noun("family", "families",'')
  const Dad = new Noun("dad", "dads",'m')
  const Mom = new Noun("mom", "moms",'f')
  const Son = new Noun("son", "sons",'m')
  const Daughter = new Noun("daughter", "daughters",'f')
  const Friend = new Noun("friend", "friends",'h')
  const SiblingSame = new Noun("sibling (same gender)", "siblings (same gender)",'h')
  const SiblingOpposite = new Noun("sibling (opposite gender)", "siblings (opposite gender)",'h')
  const Brother = new Noun("brother", "brothers",'m')
  const Sister = new Noun("sister", "sisters",'f')
  const nouns2=
    [
      {nounTitle: Family.sing, nounDetails: Family.detailsArr_si},
      {nounTitle: Family.plural, nounDetails: Family.detailsArr_pl},
      {nounTitle: Dad.sing, nounDetails: Dad.detailsArr_si},
      {nounTitle: Dad.plural, nounDetails: Dad.detailsArr_pl},
      {nounTitle: Mom.sing, nounDetails: Mom.detailsArr_si},
      {nounTitle: Mom.plural, nounDetails: Mom.detailsArr_pl},
      {nounTitle: Son.sing, nounDetails: Son.detailsArr_si},
      {nounTitle: Son.plural, nounDetails: Son.detailsArr_pl},
      {nounTitle: Daughter.sing, nounDetails: Daughter.detailsArr_si},
      {nounTitle: Daughter.plural, nounDetails: Daughter.detailsArr_pl},
      {nounTitle: Friend.sing, nounDetails: Friend.detailsArr_si},
      {nounTitle: Friend.plural, nounDetails: Friend.detailsArr_pl},
      {nounTitle: SiblingSame.sing, nounDetails: SiblingSame.detailsArr_si},
      {nounTitle: SiblingSame.plural, nounDetails: SiblingSame.detailsArr_pl},
      {nounTitle: SiblingOpposite.sing, nounDetails: SiblingOpposite.detailsArr_si},
      {nounTitle: SiblingOpposite.plural, nounDetails: SiblingOpposite.detailsArr_pl},
      {nounTitle: Brother.sing, nounDetails: Brother.detailsArr_si},
      {nounTitle: Brother.plural, nounDetails: Brother.detailsArr_pl},
      {nounTitle: Sister.sing, nounDetails: Sister.detailsArr_si},
      {nounTitle: Sister.plural, nounDetails: Sister.detailsArr_pl},
    ]
    const sub_category2={sub_title: "Family and Friends", nouns: nouns2, status:"hide"}
  
    const Clan = new Noun("clan", "clans",'')
    const Grandpa = new Noun("grandpa", "grandpas",'m')
    const Grandma = new Noun("grandma", "grandmas",'f')
    const PaternalUncle = new Noun("paternal uncle", "paternal uncles",'m')
    const MaternalUncle = new Noun("maternal uncle", "maternal uncles",'m')
    const PaternalAunt = new Noun("paternal aunt", "paternal aunts",'f')
    const MaternalAunt = new Noun("maternal aunt", "maternal aunts",'f')
    const Cousin = new Noun("cousin", "cousins",'h')
    const Nephew = new Noun("nephew", "nephews",'m')
    const Niece = new Noun("niece", "nieces",'f')
  
    const nouns3=
    [
      {nounTitle: Clan.sing, nounDetails: Clan.detailsArr_si},
      {nounTitle: Clan.plural, nounDetails: Clan.detailsArr_pl},
      {nounTitle: Grandpa.sing, nounDetails: Grandpa.detailsArr_si},
      {nounTitle: Grandpa.plural, nounDetails: Grandpa.detailsArr_pl},
      {nounTitle: Grandma.sing, nounDetails: Grandma.detailsArr_si},
      {nounTitle: Grandma.plural, nounDetails: Grandma.detailsArr_pl},
      {nounTitle: PaternalUncle.sing, nounDetails: PaternalUncle.detailsArr_si},
      {nounTitle: PaternalUncle.plural, nounDetails: PaternalUncle.detailsArr_pl},
      {nounTitle: MaternalUncle.sing, nounDetails: MaternalUncle.detailsArr_si},
      {nounTitle: MaternalUncle.plural, nounDetails: MaternalUncle.detailsArr_pl},
      {nounTitle: PaternalAunt.sing, nounDetails: PaternalAunt.detailsArr_si},
      {nounTitle: PaternalAunt.plural, nounDetails: PaternalAunt.detailsArr_pl},
      {nounTitle: MaternalAunt.sing, nounDetails: MaternalAunt.detailsArr_si},
      {nounTitle: MaternalAunt.plural, nounDetails: MaternalAunt.detailsArr_pl},
      {nounTitle: Cousin.sing, nounDetails: Cousin.detailsArr_si},
      {nounTitle: Cousin.plural, nounDetails: Cousin.detailsArr_pl},
      {nounTitle: Nephew.sing, nounDetails: Nephew.detailsArr_si},
      {nounTitle: Nephew.plural, nounDetails: Nephew.detailsArr_pl},
      {nounTitle: Niece.sing, nounDetails: Niece.detailsArr_si},
      {nounTitle: Niece.plural, nounDetails: Niece.detailsArr_pl},
      
    ]
  
    const sub_category3={sub_title: "Extended Family", nouns: nouns3, status:"hide"}
  
  
  let content = 
  {
    category: "People",
    info:[]
  }
  //console.log(content)
  content.info.push(sub_category1)
  content.info.push(sub_category2)
  content.info.push(sub_category3)
  let allnountitles=[]
  nouns1.map((a,index)=>{
    return allnountitles.push(a.nounTitle)
  })
  nouns2.map((a,index)=>{
    return allnountitles.push(a.nounTitle)
  })
  nouns3.map((a,index)=>{
    return allnountitles.push(a.nounTitle)
  })
  export {allnountitles}
  const People = content
  //export default content
  export default People
  //console.log(content.info[2].sub_title)
  //console.log(content.info[2].nouns[3])
  //console.log(content.info[0])
  //console.log(content.info[1])
  //console.log(content.info[2])
  //console.log(content.info)
  