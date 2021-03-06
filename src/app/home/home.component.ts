import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  getDishErrMsg: string;
  getPromoErrMsg: string;
  getLeaderErrMsg: string;

  constructor(private dishService: DishService,
    private promoService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish,
      errmess => this.getDishErrMsg = <any>errmess);
    this.promoService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion,
      errmess => this.getPromoErrMsg = <any>errmess);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader,
      errmess => this.getLeaderErrMsg = <any>errmess);
  }

}
