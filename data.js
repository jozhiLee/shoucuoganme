// 角色数据 - 包含50组趣味互动角色
const roleData = [
    // 第一组
    {
        pair: [
            {
                name: "皇帝",
                description: "高高在上的一国之君，掌握着至高无上的权力",
                happyQuote: "朕心甚悦！今晚摆驾御花园，与爱妃共赏明月！",
                sadQuote: "大胆！竟敢抗旨不遵，拖下去斩了！"
            },
            {
                name: "太监",
                description: "皇帝身边最贴心的侍奉之人，善于察言观色",
                happyQuote: "皇上圣明！奴才这就去准备您最爱吃的桂花糕！",
                sadQuote: "皇上息怒...奴才知错了..."
            }
        ]
    },
    // 第二组
    {
        pair: [
            {
                name: "公主",
                description: "集万千宠爱于一身的皇家千金，天真烂漫",
                happyQuote: "太好了！终于可以出宫游玩了！",
                sadQuote: "父皇又不准我出宫，哼，讨厌死了！"
            },
            {
                name: "女仆",
                description: "忠心耿耿的贴身丫鬟，无微不至地照顾公主",
                happyQuote: "公主开心，我就开心！",
                sadQuote: "公主别哭，奴婢这就去给您拿糖吃..."
            }
        ]
    },
    // 第三组
    {
        pair: [
            {
                name: "老师",
                description: "学识渊博的教育者，诲人不倦",
                happyQuote: "很好！同学们今天表现都很棒！",
                sadQuote: "上课不认真听讲，罚抄课文十遍！"
            },
            {
                name: "学生",
                description: "充满好奇心的学习者，有时调皮有时认真",
                happyQuote: "耶！这次考试满分！",
                sadQuote: "完了，作业忘记写了..."
            }
        ]
    },
    // 第四组
    {
        pair: [
            {
                name: "医生",
                description: "救死扶伤的白衣天使，专业且耐心",
                happyQuote: "病人恢复得很好，可以出院了！",
                sadQuote: "这个病人怎么又不按时吃药！"
            },
            {
                name: "护士",
                description: "温柔细心的护理工作者，照顾病人起居",
                happyQuote: "小朋友真勇敢，一点都不怕打针！",
                sadQuote: "又有急诊病人，今晚又要加班了..."
            }
        ]
    },
    // 第五组
    {
        pair: [
            {
                name: "老板",
                description: "老板，想做什么做什么",
                happyQuote: "这个项目做得不错，下一个继续努力！",
                sadQuote: "这么简单你都做不出来？当初招你进来，你不是这样的。"
            },
            {
                name: "牛马",
                description: "怨气很重，别来惹我",
                happyQuote: "太好了！终于发工资了！",
                sadQuote: "（只敢仇视瞪眼）老登滚滚滚！"
            }
        ]
    },
    // 第六组
    {
        pair: [
            {
                name: "厨师",
                description: "厨艺精湛的美食创造者，热爱烹饪",
                happyQuote: "这道菜色香味俱全，完美！",
                sadQuote: "盐放多了...这道菜毁了！"
            },
            {
                name: "服务员",
                description: "热情周到的餐厅服务人员",
                happyQuote: "客人吃得开心，就是对我们最好的肯定！",
                sadQuote: "那个客人又在投诉上菜慢..."
            }
        ]
    },
    // 第七组
    {
        pair: [
            {
                name: "将军",
                description: "英勇善战的军队领袖，威风凛凛",
                happyQuote: "我军大获全胜！兄弟们，今晚庆功！",
                sadQuote: "退兵！这一仗我们输了..."
            },
            {
                name: "士兵",
                description: "忠诚勇敢的战士，服从命令",
                happyQuote: "将军英明！跟着您打仗，我们有信心！",
                sadQuote: "又要上战场了，不知道能不能活着回来..."
            }
        ]
    },
    // 第八组
    {
        pair: [
            {
                name: "警察",
                description: "维护社会治安的正义使者",
                happyQuote: "罪犯终于落网了，百姓可以安心了！",
                sadQuote: "又有案件发生，今晚又不能回家了..."
            },
            {
                name: "小偷",
                description: "身手敏捷但不走正道的人",
                happyQuote: "今天偷到了不少好东西！",
                sadQuote: "警察来了！快跑！"
            }
        ]
    },
    // 第九组
    {
        pair: [
            {
                name: "魔法师",
                description: "拥有神奇魔法的神秘人物",
                happyQuote: "看我的魔法！变！",
                sadQuote: "魔法失灵了...这可怎么办？"
            },
            {
                name: "学徒",
                description: "努力学习魔法的新手",
                happyQuote: "我终于学会了第一个魔法！",
                sadQuote: "又把魔法咒语念错了..."
            }
        ]
    },
    // 第十组
    {
        pair: [
            {
                name: "国王",
                description: "统治王国的最高统治者",
                happyQuote: "我们的王国越来越繁荣了！",
                sadQuote: "邻国又来侵犯我们的边境了..."
            },
            {
                name: "王后",
                description: "贤良淑德的一国之母",
                happyQuote: "今天的宫廷舞会很成功！",
                sadQuote: "国王又在为国家大事烦恼了..."
            }
        ]
    },
    // 第十一组
    {
        pair: [
            {
                name: "王子",
                description: "英俊潇洒的王室继承人",
                happyQuote: "今天的骑马训练很顺利！",
                sadQuote: "又要学习那些枯燥的治国之道..."
            },
            {
                name: "骑士",
                description: "忠诚守护王室的勇士",
                happyQuote: "能为王子效力是我的荣幸！",
                sadQuote: "保护王子的任务越来越艰巨了..."
            }
        ]
    },
    // 第十二组
    {
        pair: [
            {
                name: "海盗船长",
                description: "纵横海洋的传奇海盗领袖",
                happyQuote: "今天收获了满满一船宝藏！",
                sadQuote: "暴风雨来了，快收帆！"
            },
            {
                name: "海盗船员",
                description: "跟随船长冒险的水手",
                happyQuote: "有船长在，我们什么都不怕！",
                sadQuote: "又要在海上漂泊多久啊..."
            }
        ]
    },
    // 第十三组
    {
        pair: [
            {
                name: "猫咪",
                description: "傲娇可爱的小宠物",
                happyQuote: "主人给我买了新的猫条！喵~",
                sadQuote: "主人居然敢摸别的猫！哼！"
            },
            {
                name: "铲屎官",
                description: "宠爱猫咪的主人",
                happyQuote: "我家猫咪今天好乖哦！",
                sadQuote: "又把沙发抓坏了..."
            }
        ]
    },
    // 第十四组
    {
        pair: [
            {
                name: "教练",
                description: "严格但负责的体育指导者",
                happyQuote: "很好！再坚持一下！",
                sadQuote: "训练不认真，再加100个俯卧撑！"
            },
            {
                name: "运动员",
                description: "努力训练的体育健儿",
                happyQuote: "我终于突破自己的记录了！",
                sadQuote: "好累啊，什么时候能休息..."
            }
        ]
    },
    // 第十五组
    {
        pair: [
            {
                name: "画家",
                description: "才华横溢的艺术家",
                happyQuote: "这幅画终于完成了！太美了！",
                sadQuote: "灵感枯竭了...画不出来了..."
            },
            {
                name: "模特",
                description: "展示美丽的专业人士",
                happyQuote: "今天的拍摄很顺利！",
                sadQuote: "站了一整天，腿都酸了..."
            }
        ]
    },
    // 第十六组
    {
        pair: [
            {
                name: "学霸",
                description: "学习成绩优异的学生",
                happyQuote: "这次考试又是第一名！",
                sadQuote: "这道题居然做错了，太不应该了！"
            },
            {
                name: "学渣",
                description: "学习有些吃力但很努力的学生",
                happyQuote: "终于及格了！不容易啊！",
                sadQuote: "为什么上课总是听不懂..."
            }
        ]
    },
    // 第十七组
    {
        pair: [
            {
                name: "房东",
                description: "拥有房产的出租人",
                happyQuote: "这个月的房租都收齐了！",
                sadQuote: "又有租客拖欠房租了..."
            },
            {
                name: "租客",
                description: "租房居住的人",
                happyQuote: "找到了一个不错的房子！",
                sadQuote: "又要交房租了，钱不够用..."
            }
        ]
    },
    // 第十八组
    {
        pair: [
            {
                name: "医生",
                description: "专门治疗动物的兽医",
                happyQuote: "这只小狗的手术很成功！",
                sadQuote: "这只流浪猫的伤势很严重..."
            },
            {
                name: "宠物主人",
                description: "关爱宠物的好心人",
                happyQuote: "我的宠物终于康复了！",
                sadQuote: "宠物生病了，好担心..."
            }
        ]
    },
    // 第十九组
    {
        pair: [
            {
                name: "导游",
                description: "熟悉各个景点的专业向导",
                happyQuote: "游客们都很满意这次旅行！",
                sadQuote: "又遇到了挑剔的游客..."
            },
            {
                name: "游客",
                description: "出来游玩的人",
                happyQuote: "这里的风景真美！",
                sadQuote: "好累啊，什么时候能休息？"
            }
        ]
    },
    // 第二十组
    {
        pair: [
            {
                name: "主持人",
                description: "能言善辩的节目主持",
                happyQuote: "今天的节目录制很顺利！",
                sadQuote: "嘉宾迟到了，节目要延迟..."
            },
            {
                name: "嘉宾",
                description: "参加节目的特邀人士",
                happyQuote: "能上这个节目真是太荣幸了！",
                sadQuote: "好紧张，待会说错话怎么办？"
            }
        ]
    },
    // 第二十一组
    {
        pair: [
            {
                name: "仙女",
                description: "美丽善良的天上仙子",
                happyQuote: "人间又多了一对有情人！",
                sadQuote: "有人在破坏姻缘线！"
            },
            {
                name: "凡人",
                description: "普普通通的人间百姓",
                happyQuote: "今天遇到了好心的仙子！",
                sadQuote: "生活好辛苦啊..."
            }
        ]
    },
    // 第二十二组
    {
        pair: [
            {
                name: "王子",
                description: "寻找真爱的白马王子",
                happyQuote: "我终于找到了我的公主！",
                sadQuote: "为什么每个女孩都不是我的真爱？"
            },
            {
                name: "灰姑娘",
                description: "命运多舛但善良的女孩",
                happyQuote: "王子邀请我跳舞了！",
                sadQuote: "继母又让我做很多家务..."
            }
        ]
    },
    // 第二十三组
    {
        pair: [
            {
                name: "猎人",
                description: "身手敏捷的森林猎手",
                happyQuote: "今天的收获真不错！",
                sadQuote: "猎物都跑光了..."
            },
            {
                name: "小红帽",
                description: "纯真可爱的小女孩",
                happyQuote: "要去看奶奶了，真开心！",
                sadQuote: "森林里好可怕..."
            }
        ]
    },
    // 第二十四组
    {
        pair: [
            {
                name: "理发师",
                description: "技艺精湛的美发师",
                happyQuote: "这个发型太适合你了！",
                sadQuote: "不小心剪坏了...怎么办？"
            },
            {
                name: "顾客",
                description: "来理发的人",
                happyQuote: "剪得真好看！下次还来！",
                sadQuote: "这不是我想要的发型..."
            }
        ]
    },
    // 第二十五组
    {
        pair: [
            {
                name: "摄影师",
                description: "擅长捕捉美好瞬间的人",
                happyQuote: "这张照片拍得太完美了！",
                sadQuote: "光线不好，拍不出效果..."
            },
            {
                name: "模特",
                description: "展示服装的专业人士",
                happyQuote: "今天的拍摄很顺利！",
                sadQuote: "好累啊，换了好多套衣服..."
            }
        ]
    },
    // 第二十六组
    {
        pair: [
            {
                name: "公交车司机",
                description: "驾驶公交车的工作人员",
                happyQuote: "今天路上很顺畅！",
                sadQuote: "又堵车了，乘客们要迟到了..."
            },
            {
                name: "乘客",
                description: "乘坐公交车的人",
                happyQuote: "刚好赶上了末班车！",
                sadQuote: "公交车怎么还不来..."
            }
        ]
    },
    // 第二十七组
    {
        pair: [
            {
                name: "圣诞老人",
                description: "给孩子们送礼物的快乐老人",
                happyQuote: "孩子们收到礼物都很开心！",
                sadQuote: "礼物不够了，怎么办？"
            },
            {
                name: "小精灵",
                description: "帮助圣诞老人准备礼物的助手",
                happyQuote: "今年的礼物包装得真好看！",
                sadQuote: "圣诞老人又把礼物记错地方了..."
            }
        ]
    },
    // 第二十八组
    {
        pair: [
            {
                name: "教练",
                description: "驾校的专业教练",
                happyQuote: "这个学员学得很快！",
                sadQuote: "又遇到了一个方向感很差的学员..."
            },
            {
                name: "学员",
                description: "学习开车的新手",
                happyQuote: "我终于会倒车入库了！",
                sadQuote: "科目二又挂了..."
            }
        ]
    },
    // 第二十九组
    {
        pair: [
            {
                name: "园丁",
                description: "精心照料花草的人",
                happyQuote: "花园里的花开得真美！",
                sadQuote: "有虫子在吃我的花！"
            },
            {
                name: "花朵",
                description: "美丽绽放的植物",
                happyQuote: "今天的阳光真舒服！",
                sadQuote: "有人在摘我的花瓣..."
            }
        ]
    },
    // 第三十组
    {
        pair: [
            {
                name: "厨师",
                description: "专门做甜点的糕点师",
                happyQuote: "这个蛋糕做得太完美了！",
                sadQuote: "奶油打发过了..."
            },
            {
                name: "顾客",
                description: "来买甜点的人",
                happyQuote: "这个蛋糕太好吃了！",
                sadQuote: "今天的甜点卖完了..."
            }
        ]
    },
    // 第三十一组
    {
        pair: [
            {
                name: "魔术师",
                description: "表演精彩魔术的艺人",
                happyQuote: "观众的掌声真热烈！",
                sadQuote: "魔术道具出错了..."
            },
            {
                name: "助手",
                description: "协助魔术师表演的人",
                happyQuote: "今天的表演很成功！",
                sadQuote: "差点忘记了出场顺序..."
            }
        ]
    },
    // 第三十二组
    {
        pair: [
            {
                name: "王子",
                description: "被施了魔法的青蛙王子",
                happyQuote: "终于有公主愿意吻我了！",
                sadQuote: "又有公主被我的样子吓跑了..."
            },
            {
                name: "公主",
                description: "善良勇敢的公主",
                happyQuote: "青蛙变成了帅气的王子！",
                sadQuote: "这只青蛙怎么一直跟着我..."
            }
        ]
    },
    // 第三十三组
    {
        pair: [
            {
                name: "老师",
                description: "教音乐的老师",
                happyQuote: "学生们的演奏进步很大！",
                sadQuote: "又有人上课迟到了..."
            },
            {
                name: "学生",
                description: "学习音乐的学生",
                happyQuote: "我终于学会了这首曲子！",
                sadQuote: "练琴好累啊..."
            }
        ]
    },
    // 第三十四组
    {
        pair: [
            {
                name: "警察",
                description: "交通警察",
                happyQuote: "今天的交通很顺畅！",
                sadQuote: "又有人闯红灯了！"
            },
            {
                name: "司机",
                description: "开车的人",
                happyQuote: "一路绿灯，真幸运！",
                sadQuote: "又堵车了，要迟到了..."
            }
        ]
    },
    // 第三十五组
    {
        pair: [
            {
                name: "天使",
                description: "守护人类的善良天使",
                happyQuote: "又帮助了一个需要帮助的人！",
                sadQuote: "有人在做坏事..."
            },
            {
                name: "恶魔",
                description: "喜欢恶作剧的小恶魔",
                happyQuote: "今天的恶作剧很成功！",
                sadQuote: "又被天使阻止了..."
            }
        ]
    },
    // 第三十六组
    {
        pair: [
            {
                name: "厨师长",
                description: "餐厅的主厨",
                happyQuote: "今天的菜品获得了一致好评！",
                sadQuote: "食材不新鲜了..."
            },
            {
                name: "学徒",
                description: "学习厨艺的新手",
                happyQuote: "终于学会了切菜的技巧！",
                sadQuote: "又把菜炒糊了..."
            }
        ]
    },
    // 第三十七组
    {
        pair: [
            {
                name: "作家",
                description: "才华横溢的文学创作者",
                happyQuote: "新书终于写完了！",
                sadQuote: "灵感没有了，写不出来..."
            },
            {
                name: "读者",
                description: "喜欢阅读的人",
                happyQuote: "这本书太好看了！",
                sadQuote: "书看完了，好舍不得..."
            }
        ]
    },
    // 第三十八组
    {
        pair: [
            {
                name: "教练",
                description: "健身房的私人教练",
                happyQuote: "学员的身材越来越好了！",
                sadQuote: "这个学员又偷懒了..."
            },
            {
                name: "健身者",
                description: "在健身房锻炼的人",
                happyQuote: "今天的训练很有效果！",
                sadQuote: "好累啊，不想动了..."
            }
        ]
    },
    // 第三十九组
    {
        pair: [
            {
                name: "医生",
                description: "心理医生",
                happyQuote: "患者的心理状态有了明显改善！",
                sadQuote: "这个患者的情况很复杂..."
            },
            {
                name: "患者",
                description: "寻求心理帮助的人",
                happyQuote: "和医生聊完感觉好多了！",
                sadQuote: "心里好难受，说不出来..."
            }
        ]
    },
    // 第四十组
    {
        pair: [
            {
                name: "老师",
                description: "幼儿园老师",
                happyQuote: "孩子们今天表现得真好！",
                sadQuote: "又有小朋友哭了..."
            },
            {
                name: "小朋友",
                description: "活泼可爱的孩子",
                happyQuote: "今天在幼儿园玩得很开心！",
                sadQuote: "我想妈妈了..."
            }
        ]
    },
    // 第四十一组
    {
        pair: [
            {
                name: "导演",
                description: "电影的导演",
                happyQuote: "这个镜头拍得太完美了！",
                sadQuote: "演员的表演不符合要求..."
            },
            {
                name: "演员",
                description: "电影的演员",
                happyQuote: "我终于找到了角色的感觉！",
                sadQuote: "台词好多，记不住..."
            }
        ]
    },
    // 第四十二组
    {
        pair: [
            {
                name: "国王",
                description: "童话王国的国王",
                happyQuote: "我们的王国充满了欢乐！",
                sadQuote: "坏巫师又在捣乱了..."
            },
            {
                name: "王后",
                description: "温柔善良的王后",
                happyQuote: "今天的宫廷宴会很成功！",
                sadQuote: "国王又在为国家大事操心了..."
            }
        ]
    },
    // 第四十三组
    {
        pair: [
            {
                name: "魔法师",
                description: "会变身的魔法师",
                happyQuote: "我的变身魔法越来越厉害了！",
                sadQuote: "变身咒语念错了..."
            },
            {
                name: "小狗",
                description: "被魔法师变成的小狗",
                happyQuote: "当人类也没啥意思，还是当狗好！",
                sadQuote: "我要变回人类模样！！！！"
            }
        ]
    },
    // 第四十四组
    {
        pair: [
            {
                name: "老师",
                description: "舞蹈老师",
                happyQuote: "学生们的舞蹈进步很大！",
                sadQuote: "有人上课不认真..."
            },
            {
                name: "学生",
                description: "学习舞蹈的学生",
                happyQuote: "我终于学会了那个高难度动作！（旋转、跳跃）",
                sadQuote: "压腿好痛啊..."
            }
        ]
    },
    // 第四十五组
    {
        pair: [
            {
                name: "教练",
                description: "游泳教练",
                happyQuote: "这个学员终于学会游泳了！",
                sadQuote: "又有人不敢下水..."
            },
            {
                name: "学员",
                description: "学习游泳的人",
                happyQuote: "我终于可以浮起来了！",
                sadQuote: "水好深，好害怕..."
            }
        ]
    },
    // 第四十六组
    {
        pair: [
            {
                name: "公主",
                description: "被囚禁在高塔的长发公主",
                happyQuote: "有人来救我了！",
                sadQuote: "每天只能待在塔里，好无聊..."
            },
            {
                name: "王子",
                description: "勇敢的救美王子",
                happyQuote: "我终于找到了长发公主！",
                sadQuote: "塔好高，怎么爬上去？"
            }
        ]
    },
    // 第四十七组
    {
        pair: [
            {
                name: "老板",
                description: "咖啡店的老板",
                happyQuote: "今天的咖啡卖得很好！",
                sadQuote: "咖啡豆用完了..."
            },
            {
                name: "顾客",
                description: "来喝咖啡的人",
                happyQuote: "今天的咖啡很香！",
                sadQuote: "又要排队等咖啡了..."
            }
        ]
    },
    // 第四十八组
    {
        pair: [
            {
                name: "老师",
                description: "美术老师",
                happyQuote: "学生们的作品都很有创意！",
                sadQuote: "有人上课在乱画..."
            },
            {
                name: "学生",
                description: "学习美术的学生",
                happyQuote: "我的画作被老师表扬了！",
                sadQuote: "我画的不像..."
            }
        ]
    },
    // 第四十九组
    {
        pair: [
            {
                name: "警察",
                description: "负责破案的刑警",
                happyQuote: "这个案件终于破了！",
                sadQuote: "线索太少，很难破案..."
            },
            {
                name: "侦探",
                description: "私人侦探",
                happyQuote: "我的推理是正确的！",
                sadQuote: "这个案子太复杂了..."
            }
        ]
    },
    // 第五十组
    {
        pair: [
            {
                name: "天使",
                description: "守护爱情的丘比特",
                happyQuote: "又促成了一对有情人！",
                sadQuote: "我的箭射偏了..."
            },
            {
                name: "单身流浪汉",
                description: "仇视情侣的单身人士",
                happyQuote: "一个人的生活真是太爽啦！",
                sadQuote: "不想一个人生活了，天使快点给我送对象！"
            }
        ]
    }
];