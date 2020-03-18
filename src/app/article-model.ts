export class ArticleModel {

  constructor(
		public title: string,
    public time: number,
    public article: string,
		public author?: string,
  ) {}

}
