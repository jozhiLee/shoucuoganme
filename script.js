// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const generateBtn = document.getElementById('generateBtn');
    const rolesContainer = document.getElementById('rolesContainer');
    const roleCard1 = document.getElementById('roleCard1');
    const roleCard2 = document.getElementById('roleCard2');
    
    // 点击按钮生成随机角色
    generateBtn.addEventListener('click', function() {
        // 添加加载状态
        generateBtn.classList.add('loading');
        generateBtn.disabled = true;
        
        // 模拟加载延迟，增强用户体验
        setTimeout(function() {
            generateRandomRoles();
            
            // 移除加载状态
            generateBtn.classList.remove('loading');
            generateBtn.disabled = false;
        }, 800);
    });
    
    // 生成随机角色函数
    function generateRandomRoles() {
        // 从角色数据中随机选择一组
        const randomIndex = Math.floor(Math.random() * roleData.length);
        const selectedPair = roleData[randomIndex].pair;
        
        // 更新第一个角色卡片
        updateRoleCard(roleCard1, selectedPair[0]);
        
        // 更新第二个角色卡片
        updateRoleCard(roleCard2, selectedPair[1]);
        
        // 显示角色容器并添加动画
        rolesContainer.classList.add('show');
        
        // 添加卡片动画重置
        resetCardAnimation(roleCard1);
        resetCardAnimation(roleCard2);
        
        // 滚动到角色卡片区域
        rolesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // 更新角色卡片内容
    function updateRoleCard(card, roleData) {
        card.querySelector('.role-name').textContent = roleData.name;
        card.querySelector('.role-description').textContent = roleData.description;
        card.querySelector('.dialogue-happy').textContent = roleData.happyQuote;
        card.querySelector('.dialogue-sad').textContent = roleData.sadQuote;
    }
    
    // 重置卡片动画
    function resetCardAnimation(card) {
        // 移除动画类
        card.style.animation = 'none';
        // 强制重排
        card.offsetHeight;
        // 重新添加动画
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    }
    
    // 添加触摸反馈效果（移动端）
    generateBtn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    generateBtn.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
    
    // 添加键盘支持
    document.addEventListener('keydown', function(event) {
        // 按下空格键或回车键也可以生成角色
        if (event.code === 'Space' || event.code === 'Enter') {
            // 如果焦点不在输入元素上
            if (!event.target.matches('input, textarea, select, button')) {
                event.preventDefault();
                generateBtn.click();
            }
        }
    });
    
    // 为角色卡片添加悬停效果增强
    const roleCards = [roleCard1, roleCard2];
    roleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // 响应式调整
    function handleResize() {
        // 如果屏幕宽度小于768px，调整卡片间距和大小
        if (window.innerWidth < 768) {
            rolesContainer.style.flexDirection = 'column';
            rolesContainer.style.alignItems = 'center';
        } else {
            rolesContainer.style.flexDirection = 'row';
            rolesContainer.style.alignItems = 'flex-start';
        }
    }
    
    // 初始调整
    handleResize();
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
    
    // 添加页面加载动画
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});