const fs = require('fs')
// const json2xls = require('json2xls');
const csv = require('csvtojson')

// to csv
csv()
    .fromFile('./csvvvv.csv')
    .then((jsonObj) => {
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */

        const arr = jsonObj
        /*
         * @Autor: linxu
         * @Date: 2024-04-07 09:22:11
         * @LastEditors: linxu
         * @LastEditTime: 2024-04-12 17:48:07
         * @Description:
         */
        const zh = {
            ele: {
                confirm: '确 定',
                cancel: '取 消',
                cancelled: '已取消',
                inputPlaceholder: '请输入',
                selectPlaceholder: '请选择'
            },
            common: {
                notHandle: '未处理',
                toBeDealt: '待处理',
                inProcess: '处理中',
                submit: '提交',
                back: '返回',
                backHome: '返回首页',
                logout: '退出',
                fullscreen: '全屏',
                close: '关闭',
                saveAddBack: '保存并返回',
                add: '添加',
                added: '已添加',
                select: '选中',
                remove: '移除',
                restore: '恢复',
                save: '保存',
                edit: '编辑',
                delete: '删除',
                cancel: '取消',
                show: '查看',
                search: '搜索',
                reset: '重置',
                screening: '筛选',
                clear: '清空筛选',
                query: '查询',
                newAdd: '新建',
                noData: '暂无数据',
                sureToClose: '确认关闭?',
                loadingText: '数据加载中...',
                loadingText2: '数据加载中，请稍后...',
                loadingText3: '地图加载中，请您稍候...',
                all: '全部',
                gensetStatus: ['运行', '故障', '警告', '停机', '离线', '所有'],
                startDatePlaceholder: '开始日期',
                endDatePlaceholder: '结束日期',
                startTimePlaceholder: '开始时间',
                endTimePlaceholder: '结束时间',
                to: '至',
                selectDate: '选择日期',
                selectDateTime: '选择日期时间',
                index: '序号',
                operate: '操作',
                meter: '米',
                latitude: '纬度',
                longitude: '经度',
                refresh: '点击刷新页面',
                day: ['天', '天'],
                willExpire: '天后到期',
                expired: '已到期',
                operateTip: '操作提示',
                operateTipResMsg: '操作成功！',
                tip: '提示',
                tipContent: '是否需要重新获取数据？',
                tipResMsg: '重新获取数据成功!',
                deleteTip: '删除提示',
                deleteTipContent: ['此操作将导致数据无法恢复，请谨慎操作!', '是否确认删除数据？'],
                deleteTipResMsg: ['删除成功!', '删除失败!', '已取消删除'],
                yes: '是',
                no: '否',
                imagePreview: '图片预览',
                download: '下载',
                preview: '预览',
                downloadTemplate: '下载模板',
                downloadFile: '下载文件',
                engine: '发动机',
                generator: '发电机',
                generator0: '发电',
                shi_dian: '市电',
                load: '负载',
                phaseVoltage: '相电压',
                lineVoltage: '线电压',
                ADCVoltage: 'ADC电压',
                altitude: '海拔高度',
                altitude0: '海拔',
                temperature: '温度',
                windage: '风阻',
                chargeVoltage: '充电机电压',
                runTime: '运行时间',
                absoluteTime: '绝对时间',
                engineOilTemperature: '机油温度',
                hour: '小时',
                hour0: '时',
                minute: '分钟',
                minute0: '分',
                second: '秒',
                second0: '秒',
                millisecond: '毫秒',
                unknown: '未知',
                unit: '单位',
                power: '功率',
                time: '时间',
                speed: '转速',
                quantity: '数量',
                refresh0: '刷新',
                readData: '读取',
                enable: '启用',
                disable: '禁用',
                write: '写入'
            },
            reliabilityEnum: [
                '未分类',
                '主用A-3',
                '主用A-2',
                '主用A-1',
                '主用A-0',
                '调峰B-3',
                '调峰B-2',
                '调峰B-1',
                '调峰B-0',
                '备用C',
                '备用C',
                '备用C',
                '备用C'
            ],
            login: {
                title: '智能装备动力服务租赁平台',
                customerPlaceholder: '请输入公司ID',
                userNamePlaceholder: '请输入用户名',
                passwordPlaceholder: '请输入密码',
                loginBtn: '登 录'
            },
            menu: {
                monitoringScreenTitle: '首页',
                gensetGroupMonitorTitle: '机组群监控',
                project: {
                    projectManageTitle: '项目管理',
                    projectListTitle: '项目列表',
                    projectMonitorTitle: '项目监控',
                    projectDetailTitle: '项目详情',
                    projectGensetTitle: '项目机组',
                    controllerConfigurationTitle: '控制器配置',
                    projectMonitorTitleOld: '项目监控-旧',
                    engineeringManagementTitle: '工程管理',
                    completionRecordTitle: '完工记录',
                    projectProgressRecordTitle: '项目工程进度',
                    gensetProgressRecordTitle: '单机工程进度'
                },
                equipment: {
                    equipmentManageTitle: '设备管理',
                    crewinfoTitle: '机组信息',
                    crewinfoDetailTitle: '机组信息详情',
                    crewinfoConfigTitle: '机组配置',
                    crewreportTitle: '机组报告',
                    crewreportDetailTitle: '查看报告详情',
                    crewDistributeTitle: '机组分布',
                    crewmonitorTitle: '机组监控',
                    crewLocationTitle: '机组防盗',
                    crewTrackTitle: '机组轨迹',
                    dataRecordTitle: '数据记录',
                    handleRecordTitle: '操作记录',
                    alarmCurveRecordTitle: '报警曲线记录',
                    oneclickRepairRecordTitle: '一键报修记录',
                    startingCurveRecordTitle: '启动曲线记录',
                    CurveReportTitle: '查看曲线详情',
                    runningRecordTitle: '运行记录',
                    alarmHistoryTitle: '报警历史',
                    onlineRecordTitle: '上线记录',
                    generationEnergyStatisticsTitle: '发电量统计',
                    historicalCurveTitle: '历史曲线',
                    fuelRecordTitle: '燃油记录',
                    historyRecordTitle: '历史记录',
                    crewHistoryRecordTitle: '机组履历',
                    fixedAssertsTitle: '固定资产管理'
                },
                operation: {
                    operationManageTitle: '运维管理',
                    remoteTuningTitle: '远程调参',
                    remoteTuningHistoryTitle: '远程调参-调参历史',
                    remoteTuningOperationTitle: '远程调参-调参操作',
                    deteriorationAnalysisTitle: '劣化分析',
                    leaseGensetTitle: '租赁机组',
                    crewCloudTitle: '机组云通讯',
                    maintenanceMonitorTitle: '维保监控',
                    powerQualityMonitoringTitle: '电能质量监控',
                    userFeedbackTitle: '用户反馈',
                    userFeedbackDetailTitle: '工单详情',
                    operationalChartTitle: '运维图',
                    operationalChartDailyTitle: '日运维图',
                    operationalChartWeeklyTitle: '周运维图',
                    gensetLockTitle: '远程解锁机',
                    cloudMessagePushTitle: '云消息推送'
                },
                resource: {
                    resourceManageTitle: '资源管理',
                    servicesProvidersManageTitle: '服务商管理',
                    sparePartsManageTitle: '备件管理'
                },
                setting: {
                    settingTitle: '系统设置',
                    agreementManageTitle: '协议管理',
                    maintenanceStrategyTitle: '维保策略',
                    maintenanceStrategyAddTitle: '新增维保策略',
                    maintenanceStrategyShowTitle: '查看维保策略',
                    authManageTitle: '权限管理',
                    organizationalStructureTitle: '组织架构管理',
                    usersManageTitle: '人员管理',
                    functionalAuthTitle: '功能权限管理',
                    dataAuthTitle: '数据权限管理',
                    advertisementManageTitle: '广告位管理',
                    advertisementAppTitle: 'app端广告位',
                    advertisementAppletTitle: '小程序广告位'
                }
            },
            crewList: {
                searchListPlaceholder: ['请选择所属项目', '请输入发电机组名称']
            },
            layout: {
                realTimeMonitoring: {
                    title: '实时监控',
                    drawerTitle: '实时监控事项',
                    items: ['运行报警', '周期维保', '环境风险', '自动维保'],
                    statusItems: ['警告', '故障', '维保'],
                    remark: '备注',
                    FpieRemindKey1: '自动补换机油周期情况'
                },
                helpCenter: {
                    title: '帮助中心',
                    tip: '点击打开帮助中心',
                    addWord: '添加新文档',
                    editWord: '编辑文档',
                    deleteWord: '删除',
                    deleteConfirmTip: '是否确认删除该文档?',
                    deleteResponseTip: '该文档已删除',
                    onShelf: '上架',
                    onShelfConfirmTip: '是否确认上架该文档?',
                    onShelfResponseTip: '该文档已上架',
                    offShelf: '下架',
                    offShelfConfirmTip: '是否确认下架该文档?',
                    offShelfResponseTip: '该文档已下架',
                    des: '当前页面无帮助文档,请添加文档',
                    belongPage: '所属页面',
                    belongPageTip: '请选择所属页面',
                    name: '文档名称',
                    nameTip: '请填写文档名称',
                    namePlaceholder: '请输入十字以内标题',
                    content: '文档内容',
                    contentTip: '请填写文档内容',
                    submitTip: '提交成功',
                    saveResponseTip: '该文档标题已存在,请检查!'
                },
                AccountSetting: {
                    title: '账户信息',
                    settingTitle: '账号设置',
                    infoItems: ['所在部门', '本次登录', '登陆地区', '上次登录'],
                    userName: '用户名',
                    userNamePlaceholder: '请输入用户名',
                    oldPassword: '原密码',
                    oldPasswordPlaceholder: '请输入原密码',
                    newPassword: '新密码',
                    newPasswordPlaceholder: '请输入新密码',
                    passwordTip: '长度在 6 到 8 个字符',
                    confirmPassword: '确认密码',
                    confirmPasswordPlaceholder: '请再次输入新密码',
                    confirmPasswordTip: '两次输入的密码不一致'
                }
            },
            monitoringScreen: {
                project: {
                    allTitle: '项目总览',
                    totalLabel: '机组总数',
                    operateTotalLabel: '运维机组数',
                    helpOperateTotalLabel: '代运维机组数',
                    totalProjectLabel: '项目总数',
                    projectConstructTitle: '项目架构',
                    projectConstructDetail: '架构详情'
                },
                genset: {
                    status: '机组状态',
                    operateStatusList: ['运行', '故障', '风险', '停机', '离线'],
                    rentingStatusList: ['维保', '租赁中', '施工', '待租赁', '维修']
                },
                map: {
                    mapTypeList: ['智能装备全球辐射图', '智能装备中国分布图'],
                    tipTitleList: ['点击返回智能装备全球辐射图', '点击恢复初始状态', '点击全屏展示地图'],
                    chart: {
                        gensetType: '机组分类',
                        gensetStatus: '租赁中机组运行状态',
                        typeList1: ['待租赁', '租赁中', '施工', '检修', '维修'],
                        typeList2: ['正常', '故障', '风险', '停机', '离线'],
                        tipList: [
                            '已暂停自动展播',
                            '已开始自动展播',
                            'S后将自动展示智能装备中国分布图',
                            '已停止自动展播',
                            '点击开始自动展播',
                            '点击暂停展播'
                        ],
                        clickToNation: '点击立即跳转'
                    },
                    curve: {
                        title: '全球智能装备数量Top10',
                        title2pre: '中国各省',
                        title2back: '智能装备数量Top15',
                        dialogTitle: '数据详情'
                    },
                    chartNation: {
                        genSetStateOperationMapName: ['离线', '停机', '风险', '故障', '运行'],
                        genSetStateRentingMapName: ['待租', '租赁中', '维修', '施工', '维保'],
                        genSetTimelineLabelMapping: ['全部', '待租赁', '施工', '租赁中', '维保', '维修'],
                        labelBelongToProject: '所属项目'
                    }
                },
                feedback: {
                    title: '客户反馈',
                    allFeedback: '全部反馈',
                    clickToCheckDetail: '点击查看详情',
                    dialogTitle: '客户反馈详情',
                    dialogSend: '发送',
                    dialogPlaceholder: '字数不超过100个字符',
                    dialogText: '文本',
                    dialogPhoto: '图片'
                },
                bottomTable: {
                    titleList: ['维保提示与报警实时监控', '设备与报警实时监控', '环境风险提示与报警实时监控'],
                    statusList: ['待受理', '处理中', '已完成'],
                    hoverTitleList: ['点击跳转到维保监控页面', '点击跳转到项目监控页面', '点击跳转到机组监控页面']
                }
            },
            project: {
                typeEnum: ['运维', '代运维'],
                statusEnum: ['准备中', '进行中', '已完成'],
                fileTypeEnum: ['合同', '聊天截图', '行程单'],
                warningDataTitle: ['实时报警', '保养提醒'],
                list: {
                    searchForm: {
                        projectName: '项目名称',
                        projectNamePlaceholder: '请输入项目名称',
                        projectType: '项目类型',
                        projectTypePlaceholder: '请选择项目类型',
                        projectStatus: '项目状态',
                        projectStatusPlaceholder: '请选择项目状态',
                        position: '项目地址',
                        effectTime: '项目生效时间',
                        creatTime: '项目创建时间'
                    },
                    tableColumns: [
                        '项目名称',
                        '项目类型',
                        '项目编号',
                        '功率需求',
                        '机组数量',
                        '项目地址',
                        '项目创建时间',
                        '项目状态',
                        '项目开始时间',
                        '项目结束时间',
                        '到期剩余时间'
                    ],
                    addNewProject: '新建项目',
                    expire: '即将到期项目',
                    open: '开启项目',
                    close: '完结项目',
                    openProjectTip: '确定开启项目 XX 吗？',
                    openProjectTip2: '开启操作不可取消，请谨慎操作。',
                    closeProjectTip: '确定完结项目吗？',
                    closeProjectTip2: '完结后，项目相关信息将不再支持编辑，操作不可取消，请谨慎操作。'
                },
                mouldPage: {
                    listTitle: [
                        '项目信息',
                        '项目机组',
                        '项目监控(新)',
                        '项目监控',
                        '工程管理',
                        '完工记录',
                        '数据记录'
                    ],
                    selectProject: '选择项目',
                    noDataTip: '当前项目状态下无项目数据',
                    projectList: '项目列表',
                    projectListPlaceholder: '请选择项目',
                    changeProject: '切换项目',
                    infoItems: ['项目机组功率（kW）', '项目机组数量（台）', '项目创建时间', '项目地址']
                },
                ItemTitles: [
                    '基本信息',
                    '参数配置',
                    '合同文件',
                    '项目人员',
                    '项目机组',
                    '机组群设置',
                    '并机组配置'
                ],
                operateTitle: ['新增项目', '编辑项目'],
                operateResTip: [
                    '新建项目成功!',
                    '新建项目失败，请重新提交!',
                    '编辑项目成功!',
                    '编辑项目失败，请重新提交!'
                ],
                projectForm: [
                    '项目名称',
                    '项目编号',
                    '项目类型',
                    '项目地址',
                    '项目起止时间',
                    '功率需求',
                    '租赁台数',
                    '项目租金',
                    '创建时间',
                    '合同状态'
                ],
                formTip: ['中国', '全球', '台', '元', '条'],
                projectFormPlaceholder: [
                    '请输入项目名称',
                    '请输入项目编号',
                    '请选择项目类型',
                    '请输入详细地址',
                    '',
                    '请输入项目功率需求',
                    '请输入租赁台数',
                    '请输入项目租金'
                ],
                projectFormRules: [
                    { required: '请输入项目名称', reg: '长度不超过 15 个字符' },
                    { required: '请输入项目编号', reg: '长度不超过 20 个字符' },
                    { required: '请选择项目类型', reg: '' },
                    { required: '请选择项目地址', reg: '' },
                    { required: '请选择项目起止时间', reg: '' },
                    { required: '请输入功率需求', reg: '限制整数位不超过6位,小数点不超过2位' },
                    { required: '请输入租赁台数', reg: '仅可输入不超过两位数的非零正整数' },
                    { required: '请输入项目租金', reg: '限制整数位不超过8位,小数点不超过2位' }
                ],
                projectDetails: {
                    configEditTitle: '编辑参数',
                    configLabel: [
                        '远程服务次数(次)',
                        '现场故障服务(次)',
                        '现场维保服务(次)',
                        '现场故障完成次数(次)',
                        '现场维保完成次数(次)',
                        '允许超限功率时间阈值(h)',
                        '允许超合同功率时间阈值(h)',
                        '启动电瓶跌落最大电压限制(V)',
                        '启动成功最长时间限制(S)'
                    ],
                    configForm: [
                        '远程服务次数',
                        '现场故障服务次数',
                        '现场维保服务次数',
                        '现场故障完成次数',
                        '现场维保完成次数',
                        '允许超限功率时间阈值',
                        '允许超合同功率时间阈值',
                        '启动电瓶跌落最大电压限制',
                        '启动成功最长时间限制'
                    ],
                    configFormPlaceholder: [
                        '请输入远程服务次数',
                        '请输入现场故障服务次数',
                        '请输入现场维保服务次数',
                        '请输入现场故障完成次数',
                        '请输入现场维保完成次数',
                        '请输入允许超限功率时间',
                        '请输入允许超合同功率时间',
                        '请输入启动电瓶跌落最大电压',
                        '请输入启动成功最长时间'
                    ],
                    configFormRules: ['仅可输入不超过四位数的整数', '限制整数位不超过3位,小数点不超过1位'],
                    configFormTip: ['次'],
                    contract: {
                        operate: '上传文件',
                        title: '上传合同文件',
                        form: ['文件类型', '文件上传', '文件名称', '备注'],
                        formPlaceholder: ['请选择文件类型', '请选择文件', '请输入文件名称', '请输入备注'],
                        formTip: ['长度不超过 15 个字符'],
                        fileTip: [
                            '选取文件',
                            '(支持不超过10M的.doc、docx、xls、xlsx、pdf、rar、zip、jpg、jpge、png文件；最多上传10个文件)',
                            '上传文件个数不能超过3个',
                            '上传文件格式有误!',
                            '上传文件大小不能超过 10MB!',
                            '文件上传成功!',
                            '文件上传失败，请重新提交!'
                        ],
                        showFile: '合同文件查看',
                        showFileLabel: ['文件类型', '文件名称', '文件备注', '文件列表'],
                        deleteFileTip: [
                            '删除文件',
                            '确定删除当前文件吗？',
                            '删除文件成功!',
                            '删除文件失败，请重新尝试!'
                        ]
                    },
                    contractColumns: ['文件类型', '文件名称', '上传时间', '上传人', '备注'],
                    fileListColumns: ['文件名称', '文件大小'],
                    personnel: {
                        operate: ['添加人员', '编辑人员'],
                        userType: ['商务', '技术', '群监控用户'],
                        tip: [
                            '添加用户成功!',
                            '添加用户失败，请重新提交!',
                            '编辑用户成功!',
                            '编辑用户失败，请重新提交!',
                            '删除人员',
                            '确定删除当前项目人员吗？',
                            '删除人员成功!',
                            '删除人员失败，请重新尝试!'
                        ]
                    },
                    personnelColumns: ['公司类型', '公司名称', '人员类型', '负责人', '负责人电话'],
                    personnelFormPlaceholder: ['请选择公司类型', '请选择公司', '请选择人员类型', '请选择负责人'],
                    genset: {
                        operate: ['添加机组', '维保策略', '电子围栏', '控制器配置', '工程进度', '修改围栏'],
                        type: ['已配置', '未配置', '已开启', '未开启'],
                        title: ['添加机组', '全部可选机组', '已选择机组', '移除机组'],
                        label: ['机组位置', '发动机型号', '功率'],
                        labelPlaceholder: ['请选择机组位置', '请输入发动机型号', '最低功率', '最高功率'],
                        tip: [
                            '添加机组成功!',
                            '添加机组失败，请重新提交!',
                            '移除机组成功!',
                            '移除机组失败，请重新尝试!',
                            '确定从当前项目移除 XX机组 吗？'
                        ],
                        drawerTab: ['机组配置'],
                        electronicFence: {
                            title: ['修改电子围栏设置'],
                            label: ['围栏中心', '围栏半径'],
                            labelPlaceholder: ['请输入中心点经度', '请输入中心点纬度', '请输入围栏半径'],
                            tip: ['关闭电子围栏', '确定关闭当前机组电子围栏吗？']
                        }
                    },
                    crewColumns: [
                        '机组名称',
                        '标识',
                        '发动机型号',
                        '运行时间',
                        '机组位置',
                        '是否主用',
                        '合同功率',
                        '限制功率',
                        '额定功率',
                        '备用功率',
                        '是否并机',
                        '机组配置情况'
                    ],
                    selectCrewColumns: ['机组名称', '标识', '发动机型号', '功率', '运行时间', '机组位置'],
                    parallel: {
                        operate: ['新建并机', '解除并机', '添加为主机', '添加为分机'],
                        title: [
                            '添加并机组',
                            '编辑并机组',
                            '当前项目全部机组',
                            '当前并机组',
                            '并机组主机',
                            '并机组分机'
                        ],
                        label: ['机组位置', '发动机型号', '功率', '当前总功率'],
                        labelPlaceholder: ['请选择机组位置', '请输入发动机型号', '最低功率', '最高功率'],
                        tip: [
                            '并机组只能设置一个主机！',
                            '并机组必须设置一个主机！',
                            '并机组必须设置一个分机！',
                            '添加并机组成功!',
                            '添加并机组失败，请重新提交!',
                            '编辑并机组成功!',
                            '编辑并机组失败，请重新提交!',
                            '解除并机成功!',
                            '解除并机失败，请重新尝试!',
                            '确定解除当前并机吗？',
                            "解除后，相关并机将变更为'单机组'状态，仍存在于本项目。"
                        ]
                    },
                    parallelColumns: ['并机组主机名称', '并机组分机名称', '机组总数', '并机组总功率'],
                    setParallelCrewColumns: ['机组名称', '标识', '发动机型号', '功率', '运行时间'],
                    group: {
                        operate: ['新建群组', '监控', '详情', '确认删除', '确认保存'],
                        title: ['机组群详情', '新建机组群', '编辑机组群', '请选择未成群机组', '机组群信息'],
                        label: ['机组群名称', '机组群备注', '机组数量', '总额定功率'],
                        tip: [
                            '支持机组名称/标识/发动机型号的关键字搜索',
                            '功率',
                            '已添加 XX 台机组',
                            '是否确认删除?',
                            '请填写机组群名称',
                            '请至少选择一台机组'
                        ]
                    },
                    groupColumns: ['机组群名称', '机组数量', '总额定功率(kW)', '备注', '更新时间', '更新人'],
                    setGroupCrewColumns: [
                        '机组名称与标识',
                        '标识',
                        '发动机型号',
                        '额定功率(kW)',
                        '是否并机',
                        '运行时间'
                    ]
                },
                progressManage: {
                    operate: ['工程进度管理', '关联机组', '下一步', '上一步', '返回列表'],
                    title: [
                        '工程进度',
                        '单机工程进度记录',
                        '工程进度记录查看',
                        '项目机组工程进度（整体）',
                        '工程进度记录',
                        '项目工程进度记录',
                        '工程进度记录新增',
                        '工程进度记录编辑',
                        '第一步：关联机组',
                        '第二步：完善记录内容'
                    ],
                    label: ['当前已选择'],
                    tip: ['删除记录', '确定删除当前记录吗？', '删除记录成功!', '删除记录失败，请重新尝试!'],
                    eventTypeEnum: ['项目启动', '项目完工'],
                    projectProgressColumns: ['事件类型', '事件内容', '最后编辑时间', '操作人', '整体记录数量'],
                    projectProgressRecordsColumns: ['事件类型', '事件内容', '关联机组', '最后编辑时间', '操作人'],
                    progressRecordsColumns: ['机组名称', '标识', '事件类型', '事件内容', '事件记录数量'],
                    gensetRalatedColumns: [
                        '机组名称',
                        '标识',
                        '发动机型号',
                        '功率',
                        '运行时间',
                        '限功率',
                        '是否并机'
                    ],
                    crewInfoColumns: [
                        '机组名称',
                        '标识',
                        '发动机型号',
                        '功率',
                        '运行时间',
                        '机组位置',
                        '限功率',
                        '是否并机',
                        '电子围栏开启情况',
                        '维保策略录入情况'
                    ],
                    gensetProgressColumns: ['事件类型', '事件内容', '最后编辑时间', '操作人', '单机记录数量'],
                    gensetProgressRecordsColumns: ['事件类型', '事件内容', '最后编辑时间', '操作人'],
                    sheetFormLabel: { '01': ['项目编号', '工程部人员'] }
                },
                completionRecord: {
                    title: ['费用明细', '费用汇总', '完工报告', '运维报告', '客户满意度', '查看开支图片'],
                    expensesOperate: ['添加开支', '编辑开支', '点击查看', '上传报告', '重新上传'],
                    expensesForm: ['开支类型', '开支项目', '项目金额', '开支说明', '开支图片'],
                    expensesFormPlaceholder: [
                        '请选择开支类型',
                        '请选择开支项目',
                        '请输入项目金额',
                        '请输入开支说明',
                        '请选择文件'
                    ],
                    typeEnum: ['收入', '支出'],
                    expensesTip: [
                        '字数不超过50个字',
                        '限制整数位不超过8位,小数点不超过2位',
                        '（仅支持不超过5M的.jpg/jpge/png图片文件；最多上 传3张图片）',
                        '添加开支项目成功!',
                        '添加开支项目失败，请重新提交!',
                        '编辑开支项目成功!',
                        '编辑开支项目失败，请重新提交!',
                        '删除开支项目',
                        '确定删除当前开支项目吗？',
                        '删除开支项目成功!',
                        '删除开支项目失败，请重新提交!'
                    ],
                    expensesStatistics: ['项目总收入', '项目总支出'],
                    costManageColumns: [
                        '开支类型',
                        '开支项目',
                        '项目金额',
                        '开支说明',
                        '开支图片',
                        '修改人',
                        '修改时间'
                    ],
                    costAggregationColumns: ['开支类型', '开支项目', '项目总金额', '项目笔数'],
                    completionReportColumns: ['完工报告', '完成情况', '修改人', '修改时间'],
                    completionEnum: ['待完成', '已完成'],
                    customerSatisfactionColumns: ['客户满意度', '完成情况', '修改人', '修改时间'],
                    operationReportColumns: ['运维报告', '完成情况', '上传人', '上传时间'],
                    tips: [
                        '文件类型错误!',
                        '上传文件大小不能超过 30MB!',
                        '上传报告成功!',
                        '重新上传报告成功!',
                        '处理中'
                    ]
                },
                report: {
                    title: ['发电量统计'],
                    label: ['供电机组', '累计运行时间', '累计发电量', '合计发电量'],
                    typeOpt: ['本月', '前一周', '前半个月', '前一个月']
                },
                monitor: {
                    title: ['监控概况', '配件库存'],
                    time: ['项目开始时间', '项目结束时间', '当前日期', '距离项目结束 XX 天'],
                    power: ['合同功率', '限制功率', '额定功率', '备用功率', '实时功率'],
                    gensetData: [
                        '运行',
                        '报警',
                        '警告',
                        '停机',
                        '离线',
                        '机组总数',
                        '并机台数',
                        '单机台数',
                        '合闸总数',
                        '主用台数',
                        '备用台数',
                        '实时报警',
                        '故障报修',
                        '维保&点检',
                        '未来30日运维机组',
                        '维保点检',
                        '通信到期',
                        '下次自动维保时间'
                    ],
                    parametersTitle: ['可靠性指标', '机组寿命指标', '人工成本指标', '经济性指标', '项目参数'],
                    parametersItem: {
                        0: [
                            '供电故障次数',
                            '设备故障次数',
                            '超限制功率时间(h)',
                            '启动电瓶电压跌落(V)',
                            '启动成功时间(S)',
                            ''
                        ],
                        1: [
                            '最大负荷强度(%)',
                            '超限制功率报警次数',
                            '项目平均负荷(kW)',
                            '维保完成率(%)',
                            '水温高报警次数',
                            ''
                        ],
                        2: [
                            '云服务替代率(%)',
                            '故障远程服务次数',
                            '维保远程服务次数',
                            '现场故障服务次数',
                            '现场维保服务次数',
                            ''
                        ],
                        3: [
                            '项目燃油能耗(g/kW·h)',
                            '项目总燃油用量(L)',
                            '项目燃气能耗(m³/kW·h)',
                            '项目总燃气用量(m³)',
                            '项目总发电量(kW·h)',
                            '超合同功率时间(h)'
                        ],
                        4: [
                            '允许超限功率时间阈值(h)',
                            '允许超合同功率时间阈值(h)',
                            '启动电瓶跌落最大电压限制(V)',
                            '启动成功最长时间限制(S)'
                        ]
                    },
                    genset: {
                        title: [
                            '单机组',
                            '实时功率',
                            '限制功率',
                            '并机组',
                            '并机台数',
                            '总实时功率',
                            '总限制功率',
                            '温馨提示：鼠标移入下方并机区域后按住键盘shift键同时向下滚动鼠标滚轮即可查看更多并机机组'
                        ],
                        status: ['离线', '停机', '警告', '报警', '运行'],
                        typeLabel: ['柴油机', '燃气机'],
                        reliabilityLabel: ['主用', '备用'],
                        unitLife: ['磨合期', '健康期', '老化期', '延寿期'],
                        gateOpen: ['合闸', '分闸'],
                        expireLabel: ['XX 天后通信到期', '已到期 XX 天', '无通信期限'],
                        canUse: ['可用', '不可用'],
                        alertList: ['警告', '停机', '点击进入机组监控页面', '点击进入维保监控页面', '当前实时报警'],
                        maintenanceList: ['维保', '当前维保提醒', '点击进入维保监控页面'],
                        offlineInfo: [
                            '离线信息',
                            '离线时间',
                            '通信到期日期',
                            '最后电瓶电压',
                            '最后信号强度',
                            '使用流量',
                            '总流量',
                            '最后定位'
                        ],
                        dataItem: {
                            0: '累计运行',
                            1: '冷却水温',
                            2: '发电量',
                            3: '机油压力',
                            4: '燃油液位',
                            5: '机油位',
                            6: '机油温度',
                            7: '电瓶电压',
                            8: ['缸1', '缸2', '缸3', '缸4', '缸5', '缸6'],
                            9: [
                                '进气压力',
                                '进气口温度',
                                '进气歧管压力',
                                '进气歧管温度',
                                '排气口温度',
                                '排气氧气',
                                '节气门开度',
                                '涡轮压力'
                            ],
                            10: ['节气门执行器', '节流阀位置', 'PTO状态', 'ECU状态', '请求转数范围', '请求扭矩范围'],
                            11: [
                                '实时负荷率',
                                '负荷强度',
                                '平均负荷',
                                '有功冲击负荷强度',
                                '无功冲击负荷强度',
                                '超功率运行时长',
                                '低负荷运行时长',
                                '高负荷运行时长'
                            ],
                            12: ['发电频率', '相电压', '线电压', '电流'],
                            13: ['GOV输出百分比', 'AVR输出百分比', '频率差', '电压差', '相位差'],
                            14: ['燃气用量', '燃气能耗'],
                            15: ['燃油用量', '燃油消耗'],
                            16: ['环境温度', '海拔高度', '大气压力'],
                            operate: [
                                '查看更多',
                                '展开查看更多',
                                '收起',
                                '日运维图',
                                '周运维图',
                                '运维图',
                                '机组监控',
                                '维保监控'
                            ]
                        }
                    },
                    group: {
                        selectLabel: ['切换机组群', '选择机组群', '项目列表', '机组群列表'],
                        tips: [
                            '请选择项目',
                            '请选择机组群',
                            '获取项目列表信息失败，请检查网络！',
                            '获取机组群列表信息失败，请检查网络！'
                        ],
                        label: [
                            '机组总数',
                            '运行',
                            '报警',
                            '警告',
                            '离线',
                            '停机',
                            '合闸',
                            '总实时功率',
                            '总额定功率'
                        ]
                    },
                    failure: {
                        title: ['设备故障次数', '供电故障次数'],
                        equipmentSearchLabel: ['支持故障描述/确认人的关键字搜索', '故障时间', '处理结果'],
                        operateLabel: [
                            '添加供电故障记录',
                            '故障详情',
                            '新增供电故障信息',
                            '编辑供电故障信息',
                            '查看供电故障详情'
                        ],
                        formLabel: ['供电故障描述', '供电故障时间', '故障处理结果', '故障确认人', '备注'],
                        tip: ['已选择 XX 条记录', '是否确认删除该记录?']
                    }
                }
            },
            equipmentManagement: {
                searchList: ['筛选', '类型'],
                searchListPlaceholder: ['至', '开始时间', '结束时间', '请选择'],
                columnsLabelList: ['索引值', '试验类型', '创建时间', '查看曲线'],
                dateErrorTip: '请确保结束日期在开始日期之后',
                mouldPage: {
                    listLabelList: [
                        '机组信息',
                        '机组配置',
                        '运行监控',
                        '维保监控',
                        '电能质量监控',
                        '劣化分析',
                        '远程解锁机',
                        '云消息推送',
                        '机组报告'
                    ],
                    dateRefreshTips: ['数据每隔3秒更新一次', '数据最近更新时间', '机组浏览足迹'],
                    subInfoList: ['机组编号', '发动机型号', '额定功率', '限功功率', '累计运行时长', '当前位置'],
                    unitBrowsingFootprint: {
                        title: '机组浏览足迹',
                        tip: '若退出账号或清理浏览器缓存，浏览足迹将被清空',
                        noData: '暂无记录！'
                    }
                },
                crewConfig: {
                    controllerConfiguration: '控制器配置',
                    configList: ['限功标定', '可靠性标定', '维保配置', '数据重置'],
                    beforeSaveTip: '确认向控制器写入数据吗？',
                    powerLimitForm: {
                        list: [
                            '机组长时限制功率',
                            '机组长时限制时间（24h）',
                            '开启限功率进风阻力大上限',
                            '进风阻力大限制功率（KW）',
                            '开启限功率环境温度高上限',
                            '环境温度高限制功率（KW）',
                            '开启限功率水温高上限',
                            '水温高限制功率（KW）',
                            '开启限功率海拔高上限',
                            '海拔高限制功率（KW）',
                            '环境温度高限制功率提醒阀值',
                            '水温高限制功率提醒阀值',
                            '海拔高限制功率1提醒阀值',
                            '海拔过高限制功率2提醒阀值',
                            '进风阻力高限制功率延迟',
                            '环境温度限制功率延迟',
                            '水温高限制功率延迟',
                            '海拔高限制功率延迟'
                        ],
                        conditionList: [
                            '当',
                            '机组长时',
                            '时限制功率',
                            '进风阻力',
                            '且',
                            '延迟',
                            '环境温度',
                            '时进行提醒',
                            '水箱温度'
                        ],
                        statusTextList: ['写入中', '读取中', '读取失败', '写入失败'],
                        precisionTextList: ['保留整数', '保留一位小数', '保留两位小数']
                    },
                    strategyConfigForm: {
                        strategyConfig: '维保策略配置',
                        baseConfig: '基础配置',
                        maintenanceItems: '维保事项',
                        useTemplate: '引用模板',
                        runTimeList: ['运行时长(实际/策略)', '绝对时长(实际/策略)'],
                        queryErrorTip: '机组维保策略查询失败！',
                        messageList: ['请添加维保事项!', '维保事项不允许保存空值!'],
                        deleteTipList: ['删除维保事项', '确认删除数据吗？']
                    }
                },
                crewinfo: {
                    crewStatusList: ['离线', '停机', '警告', '故障', '运行'],
                    allCrew: '全部机组',
                    columnsList: ['机组名称', '机组状态', '安装地点', '经纬度'],
                    searchList: ['机组编码搜索', '机组位置筛选'],
                    searchListPlaceholder: ['请输入机组编码', '请选择机组所在位置'],
                    operateButtonList: ['机组信息', '机组报告'],
                    dataList: [
                        {
                            title: '基本信息',
                            options: [
                                {
                                    options: ['机组名称', '云猫标识', '经度', '纬度', '安装地点', '曲线', '有人值守']
                                }
                            ]
                        },
                        {
                            title: '机组信息',
                            options: [
                                {
                                    options: ['出厂编号', '品牌', '型号', '规格', '生产厂家', '生产日期', '备注']
                                },
                                {
                                    options: [
                                        '额定转速(r/min)',
                                        '额定频率(Hz)',
                                        '额定电流(A)',
                                        '额定功率(kW)',
                                        '额定电压(V)',
                                        '视在功率(kVA)',
                                        '功率因数'
                                    ]
                                },
                                {
                                    options: ['机组照片']
                                }
                            ]
                        },
                        {
                            title: '维保信息',
                            options: [
                                {
                                    options: [
                                        '客户编号',
                                        '客户公司',
                                        '设备归属公司',
                                        '设备责任人',
                                        '责任人联系电话',
                                        '维保公司',
                                        '维保联系人',
                                        '联系人电话'
                                    ]
                                }
                            ]
                        },
                        {
                            title: '控制器信息',
                            options: [
                                {
                                    options: ['出厂编号', '品牌', '型号', '规格', '生产厂家', '生产日期']
                                },
                                {
                                    options: ['控制器类型', '是否可以控制', '供电系统']
                                },
                                {
                                    type: 'ol',
                                    key: 'ProgrammableSensors',
                                    options: ['可编程传感器 1', '可编程传感器 2', '可编程传感器 3']
                                }
                            ]
                        },
                        {
                            title: '发动机信息',
                            options: [
                                {
                                    options: ['出厂编号', '品牌', '型号', '规格', '生产厂家', '生产日期']
                                }
                            ]
                        },
                        {
                            title: '发电机信息',
                            options: [
                                {
                                    options: ['出厂编号', '品牌', '型号', '规格', '生产厂家', '生产日期']
                                }
                            ]
                        },
                        {
                            title: '采集器信息',
                            options: [
                                {
                                    options: [
                                        '出厂编号',
                                        '品牌',
                                        '型号',
                                        '规格',
                                        '生产厂家',
                                        '生产日期',
                                        '通讯协议状态',
                                        '通讯说明'
                                    ]
                                }
                            ]
                        },
                        {
                            title: '易耗配件材料统计',
                            options: [
                                {
                                    options: [
                                        '巡检卡号',
                                        '防冻液容量',
                                        '机油容量',
                                        '空气滤清器型号',
                                        '个数',
                                        '机油滤清器型号',
                                        '个数',
                                        '机油旁滤清器型号',
                                        '个数',
                                        '柴油滤清器型号',
                                        '个数'
                                    ]
                                }
                            ]
                        },
                        {
                            title: '基站信息',
                            options: [
                                {
                                    options: ['基站名称', '基站编号', '基站地点']
                                }
                            ]
                        }
                    ],
                    tabsList: ['机组信息', '机组履历', '机组关重件'],
                    sensorsProgrammable: ['可编程传感器', '显示名'],
                    formatData: ['AMF模块', '1P2W', '3P3W', '已完成', '待下发', '下发中', '通讯正常'],
                    dialog: {
                        title: ['添加机组履历', '编辑机组履历', '添加机组关重件'],
                        label: ['描述', '文件上传', '选取文件']
                    },
                    keyPartsItemList: ['关重件', '出厂编号', '品牌', '型号', '规格', '厂商']
                },
                crewReport: {
                    tabsList: [
                        '出厂试验报告',
                        '交付试验报告',
                        '起动可靠性分析报告',
                        '功率时间矩阵分析报告',
                        '运行报告',
                        '运行可靠性报告'
                    ],
                    reportCommonTableColumnList: ['索引值', '试验类型', '创建时间', '查看报告', '删除'],
                    timeMatrixReport: {
                        sourceDescribe: ['数据来源', '机组信息获取', '手动输入'],
                        title: '发电机组功率时间矩阵分析报表',
                        tableItemList: ['3D矩阵', '二维矩阵'],
                        descriptionsItems: [
                            '发动机序列号',
                            '发动机型号',
                            '发动机品牌',
                            '发动机ECU型号',
                            '电机序列号',
                            '电机型号',
                            '电机品牌',
                            'AVR型号',
                            '控制器序列号',
                            '控制器型号',
                            '控制器品牌',
                            '云猫标识',
                            '额定转速',
                            '额定功率',
                            '额定频率',
                            '视在功率',
                            '额定电压',
                            '额定电流',
                            '功率因数',
                            '限制功率',
                            '环境温度',
                            '大气压力',
                            '海拔高度',
                            '测试时间'
                        ],
                        downloadTitle: '发电机组功率时间矩阵分析报表'
                    },
                    crewOperateReportTitle: '机组运行报告',
                    crewReliabilityReportTitle: '机组可靠性运行报告',
                    crewOperateRecordItems: [
                        '机组名称',
                        '云猫标识',
                        '品牌',
                        '出厂编号',
                        '发动机',
                        '发电机',
                        '采集器',
                        '控制器',
                        '累计发电量',
                        '累计运行时间'
                    ],
                    echartsItems: ['发电量', '运行时间', '次数', '停机类报警', '警告类报警', '次'],
                    startingReliabilityReport: {
                        reportTitle: '发电机组起动可靠性趋势分析报表',
                        echartsItems: [
                            '电池电压',
                            '水温',
                            '油压',
                            '燃油位',
                            '蓄电池1起动电压跌落',
                            '蓄电池2起动电压跌落',
                            '起动成功时间'
                        ],
                        yAxisItems: ['电池电压', '水温', '油压', '燃油位', '电压跌落']
                    }
                },
                crewDistribute: {
                    tabsList: ['地图模式', '架构模式'],
                    searchList: ['机组名称', '机组状态', '公司名称'],
                    searchListPlaceholder: ['请输入机组名称', '请选择机组状态', '请输入公司名称'],
                    mchStateOpt: ['全部', '在线', '故障', '警告', '运行', '停机', '离线']
                },
                crewMonitor: {
                    lastCollectTime: '上次采样时间',
                    latestRunRecord: '最新运行记录',
                    openFullscreen: '打开全屏页面',
                    realTimeAlert: '实时报警',
                    control: {
                        title: '控制',
                        list: ['停机', '手动', '自动', '报警复位', '启动'],
                        handleControl: ['您确定按下此按钮吗', '操作提示', '确定', '取消', '已取消']
                    },
                    crewPic: '机组图片',
                    crewVideo: '机组视频',
                    durationWithoutPowerGeneration: '持续未发电时长',
                    allMobileData: '总流量(月)',
                    usedMobileData: '已用流量',
                    powerOnTimes: '开机次数',
                    powerTotal: '发电量统计',
                    fullscreenTitle: '机组全屏监控',
                    currentTime: '当前时间',
                    settingTitle: '监控设置',
                    scrollTitle: '滚动',
                    intervalTitle: '间隔',
                    statusTitle: '状态',
                    searchListPlaceholder: ['请输入发电机组名称'],
                    crewListLabels: '机组列表',
                    crewLocationLabels: '机组定位',
                    fuelOilCurve: '燃油曲线'
                },
                crewLocation: {
                    fence: '电子围栏',
                    fenceStatus: ['开启', '关闭'],
                    fenceModify: '修改',
                    backToOrigin: '返回机组当前位置',
                    setFence: '设置电子围栏',
                    setFenceCurrent: '当前半径',
                    closeFenceTip: '是否确定关闭电子围栏？'
                },
                crewTrace: {
                    noTraceTip: '暂无机组轨迹',
                    searchErrorTip: '开始日期必须在结束时间之前！请检查。'
                },
                crewOperateRecord: {
                    columnsLabelList: ['类型', '操作人', '操作时间']
                },
                runningRecord: {
                    columnsLabelList: ['机组名称', '开始时间', '结束时间', '持续时间', '发电kWh']
                },
                alertHistory: {
                    dialogTitle: '查看记录曲线',
                    dialog: ['机组名称', '报警时间', '报警名称'],
                    columns: ['内容', '类型', '开始时间', '结束时间'],
                    operateLabel: '查看记录曲线',
                    typeOpt: ['全部', '警告', '停机']
                },
                onlineRecord: {
                    columns: ['机组名称', '类型', '时间'],
                    typeOpt: ['全部', '离线', '上线']
                },
                generationEnergyStatistics: {
                    typeOpt: ['本月', '前一周', '前半个月', '前一个月'],
                    tableLabelList: [
                        '发电量统计',
                        '机组名称',
                        '开始时间',
                        '结束时间',
                        '累计发电量',
                        '累计运行时间'
                    ],
                    tooltip: ['日累计发电量', '日累计运行时间']
                },
                historicCurve: {
                    expandLabelList: ['展开', '收起'],
                    typeOpt: ['全部', '前2小时', '前1.5小时', '前1小时', '前0.5小时']
                }
            },
            settingManagement: {
                maintenanceStrategy: {
                    maintenanceItems: '维保事项',
                    maintenanceNew: '维保策略(新)',
                    searchList: ['维保策略名称', '发动机品牌', '策略主备分类', '维保策略状态'],
                    columnsList: [
                        '维保策略名称',
                        '发动机品牌',
                        '发动机系列',
                        '策略主备分类',
                        '策略主备状态',
                        '最后编辑人',
                        '最后编辑时间'
                    ],
                    dropdownModelList: ['全部', '上柴', '潍柴', '玉柴'],
                    dropdownStrategyTypeList: ['备用机', '主用机'],
                    beforeSaveTip: '您所做的更改可能未保存,是否确定返回？',
                    newAddFormLabelList: [
                        '节拍时长',
                        '周期节拍个数',
                        '维保周期时长',
                        '维保周期个数',
                        '检修周期时长',
                        '维保节拍个数'
                    ]
                },
                advertisement: {
                    nameList: ['小程序', '首页轮播图'],
                    formLabelList: ['图片类型', '图片名称', '上传图片', 'URL', '备注'],
                    newAddButtonLabel: '新增图片',
                    columnsList: [
                        '图片名称',
                        '图片类型',
                        '缩略图',
                        '排序',
                        'URL',
                        '备注',
                        '状态',
                        '操作人',
                        '最后修改时间',
                        'id'
                    ],
                    errorTip: ' 请上传宽/高比例为2:1且小于5M的图片！'
                }
            },
            operation: {
                operationChart: {
                    // 额定电压 17
                    tableLabelList: [
                        '基础信息',
                        '项目信息',
                        '机组信息',
                        '配置信息',
                        '项目编号',
                        '项目名称',
                        '发动机型号',
                        '发电机型号',
                        '备用功率',
                        '额定功率',
                        '项目类型',
                        '项目时间',
                        '控制器型号',
                        '额定转速',
                        '额定电流',
                        '项目地址',
                        '额定频率',
                        '额定电压',
                        '启动次数',
                        '海拔',
                        '环境温度',
                        '大气压力',
                        '运行报警',
                        '点击跳转预警页面',
                        '维保报警',
                        '天气',
                        '维保周期',
                        '机组运行信息',
                        '累计运行时长',
                        '发电量',
                        '平均负荷强度'
                    ],
                    expandLabelList: ['收起', '展开']
                },
                chart: {
                    timeInterval: '时间间隔',
                    timeList: ['1分钟', '5分钟', '10分钟', '30分钟', '1小时', '2小时', '4小时']
                },
                operationalChartDaily: {
                    title: '单日运维图报告',
                    noProject: '无项目',
                    projectNoGenset: '该项目未绑定机组！',
                    pleaseSelectGenset: '请选择机组！',
                    fourPower: ['合同功率', '限功功率', '额定功率', '备用功率'],
                    chartList: {
                        title: ['机组工作规律', '启动可靠性', '维保节拍', '功率匹配'],
                        describe: [
                            '通过了解机组规律可以猜测客户工作时间规律，进行维保节拍、沟通等时间确认。',
                            '通过观察环境温度、气压信息，来评估对机组设备的启动影响。',
                            '查看油耗和进风过滤阻力对燃油、过滤器进行维保节拍了解。',
                            '了解某天内功率各个时段有功功率、无功功率情况，用于合同，限功、额定、备用等功率匹配。'
                        ],
                        tips: [
                            [
                                '通过发电有功功率展示该当前机组在一天中各个时间的工作情况，从而了解客户每天的用电情况，用电高峰期、用户稳定期等。',
                                '有功功率：单位KW。'
                            ],
                            null,
                            [
                                '进风过滤阻力：用于查看环境恶劣程度，通过查看阻力大小判断是否需要清洗滤网，如：阻力增大到88Pa，则需要进行清洗。',
                                '油耗：用于预测加油，通过观察油耗使用情况，可了解在一天何时进行加油处理。'
                            ],
                            [
                                '查看客户负载情况，知晓客户负载使用情况，为客户精准匹配功率段，可以为超出合同功率部分提供收费证明。',
                                '合同功率(w1)：租赁项目立项时与客户约定的使用功率。',
                                '限功功率(w2)：设定机组在一个合理的功率范围内进行发电运行，以防超功率运行损坏装备。',
                                '额定功率(w3)：机组出厂的额定功率。',
                                '备用功率(w4)：机组可以达到的最大功率值。',
                                '有功功率：有功功率是指单位时间内实际发出或消耗的交流电能量，是周期内的平均功率。查看有功负载情况。',
                                '无功功率：客户设备端电动机负载情况。'
                            ]
                        ],
                        dataItems: [
                            ['有功功率', '发动机转速'],
                            ['环境温度', '水温'],
                            ['油耗', '进风过滤阻力'],
                            ['有功功率', '无功功率', '谐波分析总谐波畸变率']
                        ],
                        yAxisItems: [
                            ['有功功率', '发动机转速'],
                            ['环境温度/水温'],
                            ['油耗', '进风过滤阻力'],
                            ['有功功率', '谐波分析总谐波畸变率']
                        ]
                    },
                    rulesList: [
                        '请输入产品名称',
                        '请输入产品编号',
                        '请输入联系人',
                        '请输入联系电话',
                        '请输入服务地址'
                    ],
                    searchList: ['项目', '机组', '日期'],
                    buttonLabelList: [
                        '报警曲线记录',
                        '一键报修记录',
                        '启动曲线记录',
                        '瞬时曲线',
                        '点击跳转云消息推送',
                        '云消息推送',
                        '点击一键报修',
                        '一键报修',
                        '是否确定发起调参申请？',
                        '调参申请',
                        '监控处理登记'
                    ],
                    repairForm: [
                        '服务申请',
                        '报修产品',
                        '出厂编号',
                        '联系人',
                        '联系电话',
                        '服务地址',
                        '故障图片',
                        '故障描述',
                        '预览'
                    ],
                    curveOpt: [
                        '水套电瓶电压',
                        '水套加热器AC线电压',
                        '水套加热器电流',
                        '水套加热器水温',
                        'ECU进气温度',
                        'ECU通讯状态',
                        'ECU涡轮压力',
                        'ECU燃油消耗速度',
                        '燃油耗尽传感器%',
                        '机油温度',
                        '燃油箱容量',
                        '待滤箱箱容量',
                        '补机油箱容量',
                        '废液箱容量',
                        '座燃油箱液位',
                        '待滤箱液位',
                        '补机油箱液位',
                        '排水含油传感器液位',
                        '燃油油气分离器液位',
                        '废液箱液位',
                        'U型油底壳机油液位',
                        '进风过滤阻力',
                        '环境温度',
                        '电瓶1电压',
                        '充电机电压',
                        '浮充电流',
                        '燃油位',
                        '机油压力',
                        '水温',
                        '当前转速',
                        '发电总无功功率',
                        '发电总有功功率',
                        '发电相电流',
                        '发电频率',
                        '发电相电压',
                        '发电线电压',
                        '市电总功率因数',
                        '市电总无功功率',
                        '市电总有功功率',
                        '市电频率',
                        '市电相电压',
                        '市电线电压',
                        'APF通讯状态',
                        '转速波动率',
                        '功率波动率',
                        '电机轴承温度',
                        'U相绕组温度',
                        'W相绕组温度',
                        'V相绕组温度'
                    ],
                    totalDataObj: [
                        '机组累计加油次数',
                        '机组累计燃油用量',
                        '机组累计运行时间',
                        '机组累计发电量',
                        '机组累计无故障时间',
                        '机组累计超功率时间',
                        '机组累计平均能耗',
                        '机组累计低负荷运行时长',
                        '机组累计高负荷运行时长'
                    ],
                    chart: {
                        title: '日运维图',
                        yAxis: [
                            '功率因素、ECU通讯状态',
                            '电池电压',
                            '水温、液位',
                            '三相电流',
                            '三相电压',
                            '机油压力'
                        ]
                    }
                },
                operationalChartWeekly: {
                    title: '周运维图报告',
                    buttonLabelList: ['点击跳转项目维保策略配置页', '维保策略配置'],
                    recordList: ['设备报警记录', '维保提示记录', '环境风险提示', '事件时间', '报警名称'],
                    reliability: ['启动可靠性趋势', '通过电瓶电压跌落情况、启动成功时间进行启动可靠性判断观察。'],
                    errorTip2: '获取报警记录信息失败，请检查网络！',
                    chartList: {
                        title: ['客户工作规律', '负载规律', '优化维保策略'],
                        describe: [
                            '通过了解客户规律可以猜测客户工作时间规律，进行维保节拍、沟通等时间确认。',
                            '通过有功功率和无功功率指标数据，展示最近7天负载情况。',
                            '查看油耗和进风过滤阻力对燃油、过滤器进行维保策略优化。'
                        ],
                        tips: [
                            [
                                '通过发电有功功率以及发电量展示当前机组在各个时间的工作情况，从而了解客户每天的用电情况，用电高峰期、用户稳定期等。',
                                '有功功率：在单位时间内，最大有功功率值，单位kW。',
                                '发电量：在单位时间内，累计的总发电量，单位：kW·h。',
                                '注：在客户工作规律图表中，因取的是最大有功功率，发电量在该图表中不等于有功功率 * 时间。'
                            ],
                            [
                                '查看客户负载情况，知晓客户负载使用情况，为客户精准匹配功率段，可以为超出合同功率部分提供收费证明。',
                                '合同功率(w1)：租赁项目立项时与客户约定的使用功率。',
                                '限功功率(w2)：设定机组在一个合理的功率范围内进行发电运行，以防超功率运行损坏装备。',
                                '额定功率(w3)：机组出厂的额定功率。',
                                '备用功率(w4)：机组可以达到的最大功率值。',
                                '有功功率：有功功率是指单位时间内实际发出或消耗的交流电能量，是周期内的平均功率。查看有功负载情况。',
                                '无功功率：客户设备端电动机负载情况。'
                            ],
                            [
                                '通过查看油耗、进风过滤阻力、燃油含水量等指标信息，观察一周的变化情况，可用于优化维保策略。',
                                '进风过滤阻力：用于查看环境恶心劣程度，通过查看阻力大小判断是否需要清洗滤网，如：阻力增大到88Pa，则需要进行清洗。',
                                '油耗：用于预测加油，通过观察油耗使用情况，可了解在一天何时进行加油处理。',
                                '燃油含水量：燃油中含水占比。'
                            ]
                        ],
                        dataItems: [
                            ['有功功率', '发电量'],
                            ['有功功率', '无功功率'],
                            ['油耗', '进风过滤阻力', '燃油含水量']
                        ],
                        yAxisItems: [
                            ['有功功率', '发电量'],
                            ['有功功率', '无功功率'],
                            ['油耗', '%']
                        ]
                    },
                    reliabilityChart: ['时长', '电瓶电压', '电压最低值', '启动时长']
                },
                gensetLock: {
                    title: ['机组信息', '机组解锁机', '解锁机记录'],
                    operateButton: ['锁机', '解锁'],
                    gensetInfoList: [
                        '机组名称',
                        '云猫标识',
                        '发动机型号',
                        '电机型号',
                        '控制器品牌',
                        '控制器型号'
                    ],
                    tableList: ['类型'],
                    columnsList: ['设备名称', '类型', '操作时间', '操作人', '内容'],
                    dialog: {
                        tip: [
                            '您确定要远程解锁吗？',
                            '您确定要远程锁机吗？',
                            '执行远程锁机操作后，机组将无法再次启动。请谨慎操作。',
                            '锁机原因',
                            '字符长度不超过200'
                        ]
                    }
                },
                cloudMessagePush: {
                    addButtonLabel: '添加推送消息',
                    attentions: '当前控制器暂未支持云消息推送',
                    columnsList: ['设备名称', '轮播内容', '轮播时长', '推送时间', '类型'],
                    typeList: ['推送消息', '清除消息'],
                    dialog: {
                        columnsList: ['机组名称', '云猫标识', '类型', '选择模板', '轮播内容', '轮播时长'],
                        attentions: '注意替换模板中的“___”',
                        attentions2: '若轮播时长设置为0或不填写，则代表永久轮播。'
                    },
                    mouldList: [
                        '业务咨询：本机使用维护、技术业务咨询请联系xxx。',
                        '验收催款：本机已完成交付验收，按合同需支付验收款，请联系xxx。',
                        '质保催款：本机一年（/1500小时）质保期已到，按合同需缴纳质保金，请联系xxx。',
                        '催款警告：本机欠款，有停机风险，请联系xxx。',
                        '可靠性提醒：本机**部件有故障风险，请及时保养或更换。',
                        '租赁催款：按合同本机需支付租赁款，请联系xxx。',
                        '维保提醒：本机维保还有**小时到期，请及时保养或联系xxx。',
                        '正品备件采购请联系xxx。',
                        '专业油品采购请联系xxx。',
                        '正品三滤采购请联系xxx。',
                        '天气寒冷，请注意添加防冻液。',
                        '冷却水温偏高，请注意加注冷却水。',
                        '机油压力偏高，请更换机油、滤清器。',
                        '机油压力偏低，请注意添加机油。',
                        '本机起动困难，请保养起动电池。',
                        '其它。'
                    ]
                },
                feedback: {
                    people: '反馈人',
                    classification: '工单分类',
                    classificationStatus: '工单状态',
                    confirm: {
                        title: '关闭工单',
                        tip: '确定关闭当前工单吗？',
                        successMes: '关闭工单成功',
                        errorMes: '关闭工单失败，请重新尝试'
                    },
                    detailTitle: '工单详情',
                    detailList: [
                        '工单号',
                        '联系电话',
                        '所属企业',
                        '字数不超过100个字符',
                        '请输入回复信息！',
                        '至少上传一张图片！',
                        '确认发送？',
                        '数据提交中，请稍候...'
                    ],
                    formTip: ['仅限上传', '张图片', '上传文件大小不能超过 5MB!']
                },
                remoteTuning: {
                    list: {
                        searchFormPlaceholder: ['请输入发电机组名称', '请输入客户姓名'],
                        option1: ['待确认', '已确认', '已完成', '已评价'],
                        option2: ['无人值守', '有人值守'],
                        operate: ['确认', '调参', '历史'],
                        columns: [
                            '服务单编号',
                            '申请人',
                            '申请时间',
                            '机组名称',
                            '客户姓名',
                            '客户联系方式',
                            '状态',
                            '调参人',
                            '是否可调参',
                            '机组编码'
                        ],
                        tips: ['是否确认？', '是否确认删除？']
                    },
                    history: {
                        infoLabel: [
                            '机组名称',
                            '云猫标识',
                            '控制器品牌',
                            '调参协议',
                            '安装地点',
                            '通讯协议',
                            '有人值守'
                        ],
                        columns: ['名称', '旧值', '新值', '单位', '更新时间']
                    },
                    operation: {
                        operate: ['完成服务'],
                        tabList: ['参数', '功能', '曲线', '测量', '维保']
                    }
                },
                deteriorationAnalysis: {
                    tabList: ['水箱劣化分析', '机油滤清器劣化分析', '电瓶劣化分析'],
                    timeLabel: ['今日', '本周', '本月', '本年'],
                    dataLabel: ['诊断指标', '劣化指标']
                },
                leaseGenset: {
                    searchForm: ['机组编号', '运行状态', '租赁状态', '机组位置筛选', '租赁类型'],
                    searchFormPlaceholder: [
                        '请输入机组编号',
                        '请选择运行状态',
                        '请选择租赁状态',
                        '请选择机组所在位置',
                        '请选择租赁类型'
                    ],
                    runStatusEnum: ['离线', '停机', '风险', '故障', '运行'],
                    leaseStatusEnum: ['待租赁', '租赁中', '维修', '施工', '检修'],
                    leaseTypeEnum: ['运维', '代运维'],
                    columns: [
                        '设备名称',
                        '标识',
                        '发动机型号',
                        '功率',
                        '运行时间',
                        '租赁类型',
                        '租赁状态',
                        '运行状态',
                        '机组位置',
                        '租赁次数'
                    ],
                    selectCrewColumns: ['设备名称', '标识', '机组位置', '租赁类型'],
                    addTitle: ['添加机组', '公有云可选机组', '已选择机组', '编辑机组'],
                    addSearchForm: ['设备名称', '标识', '机组位置'],
                    addSearchFormPlaceholder: ['请输入设备名称', '请输入标识', '请选择机组位置'],
                    tips: [
                        '添加机组成功!',
                        '添加机组失败，请重新提交!',
                        '编辑机组成功!',
                        '编辑机组失败，请重新提交!',
                        '移除机组',
                        '确定移除当前机组吗？',
                        '移除机组成功!',
                        '移除机组失败，请重新尝试!'
                    ]
                },
                maintenanceMonitor: {
                    title: [
                        '报警信息',
                        '智能维保记录',
                        '监控处理登记',
                        '维保策略详情',
                        '机组图像',
                        '机组图片',
                        '机组视频',
                        '燃油单元',
                        '冷却水单元',
                        '机油单元',
                        '废液箱单元'
                    ],
                    specialLabel: '自动补换机油周期情况',
                    operate: ['开', '关', '强制自动补换机油'],
                    monitorItem: {
                        0: ['含水量', '燃油排水', '排水电磁阀'],
                        1: ['进油管空气比例', '燃油预供'],
                        2: ['燃油耗尽传感器', '燃油箱余量', '燃油补充', '燃油抽取泵'],
                        3: [
                            '冷却液位',
                            '当前水温',
                            'A相电流',
                            'B相电流',
                            'C相电流',
                            'AC线电压',
                            '水温加热',
                            '水套加热器',
                            '水箱补水'
                        ],
                        4: ['发动机油底壳液位'],
                        5: ['补机油箱余量', '油底壳补油', '补机油补油泵', '新机油箱补油', '抽取外部机油泵'],
                        6: ['待滤油箱余量', '油底壳排油', '待滤油箱抽油泵', '废机油箱排油', '排废机油泵'],
                        7: ['废液箱液位']
                    },
                    tips: [
                        '暂无摄像头',
                        '切换至维保视图',
                        '切换至卡片视图',
                        '切换至仿真视图',
                        '记录智能维保前后关键数据信息'
                    ],
                    stepTitles: [
                        '',
                        '静置状态',
                        '准备状态',
                        '测试加油状态',
                        '测试加油静置',
                        '测试抽油状态',
                        '测试抽油静置',
                        '正式加油状态',
                        '正式抽油状态'
                    ],
                    IMRDialogLabel: ['维保时间'],
                    IMRDialogColumns: [
                        '开始时间',
                        '结束时间',
                        '含水量',
                        '进油管空气比例',
                        '燃油剩余量',
                        '油底壳机油液位',
                        '新机油箱余量',
                        '新机油箱%',
                        '待滤机油箱余量',
                        '待滤机油箱%',
                        '废液箱余量',
                        '废液箱%',
                        '电瓶电压'
                    ],
                    dealDialogLabel: [
                        '实时监控事项处理登记',
                        '处理登记',
                        '处理记录',
                        '请选择已处理的实时监控事项',
                        '备注说明',
                        '处理事项'
                    ],
                    dealDialogOperate: ['确认登记'],

                    simulationView: {
                        title: '维保仿真视图',
                        status: ['正常', '缺水', '含水'],
                        0: ['水箱水位', '水温', '水温加热', '水套加热器', '水箱补水'],
                        1: ['进油管液位', '燃油预供'],
                        2: ['机体温度', '进风阻力', '进油剩余', '油底壳机油液位', '电瓶电压', '废液箱'],
                        3: ['排水百分比', '燃油排水', '排水电磁阀'],
                        4: ['补机油箱', '油底壳补油', '补机油补油泵', '新机油箱补油', '抽取外部机油泵'],
                        5: ['待滤油箱', '油底壳抽油', '待滤油箱抽油泵', '废机油箱排油', '排废机油泵'],
                        6: ['底座燃油箱', '燃油补充', '燃油抽取泵']
                    },
                    maintenanceView: {
                        status: ['状态', '启动', '停止'],
                        label_0: ['维保工作站使能信号状态'],
                        label_1: ['手动模式', '自动模式'],
                        label_2: ['抽新机油泵', '油底壳机油', '补机油箱还能抽', '油底壳机油还能补'],
                        label_3: ['排废机油泵', '待滤油箱', '油底壳机油还能排', '待滤油箱还能排'],
                        label_4: ['排水泵', '废液箱', '排水百分比还能排'],
                        label_5: ['外部补新机油泵', '补机油箱', '补机油箱还能补'],
                        label_6: ['外部排废机油泵', '待滤油箱', '待滤油箱还能排'],
                        label_7: ['外部抽燃油泵', '底座燃油箱', '底座燃油还能补']
                    }
                },
                powerQuality: {
                    label: ['实时数据', '历史曲线', 'APF启动按钮', 'APF停止按钮', 'APF复位按钮'],
                    statusLabel: ['系统初始化', '系统停止', '电压爬升', '等待带载', '正常工作'],
                    typeOpt: ['前2小时', '前1.5小时', '前1小时', '前0.5小时'],
                    searchLabel: [
                        '时间跨度',
                        '展开',
                        '收起',
                        '全选',
                        '参数选择',
                        '未查询到相关数据,建议修改查询条件'
                    ],
                    apfParamsGroupList: {
                        item_0: {
                            typeName: '发电机侧',
                            props: [
                                '电源侧A相电流畸变率',
                                '电源侧B相电流畸变率',
                                '电源侧C相电流畸变率',
                                '',
                                '电源侧A相电压',
                                '电源侧B相电压',
                                '电源侧C相电压',
                                '',
                                '电源侧A相电流',
                                '电源侧B相电流',
                                '电源侧C相电流',
                                '',
                                '电源侧A相功率因数',
                                '电源侧B相功率因数',
                                '电源侧C相功率因数',
                                '',
                                '电源侧总功率因数',
                                ,
                                '电源侧电流负序不平衡度',
                                '电源侧电流零序不平衡度',
                                '',
                                '电机轴承温度',
                                'U相绕组温度',
                                'V相绕组温度',
                                'W相绕组温度'
                            ]
                        },
                        item_1: {
                            typeName: '负荷侧',
                            props: [
                                '负荷侧A相电流畸变率',
                                '负荷侧B相电流畸变率',
                                '负荷侧C相电流畸变率',
                                '负荷侧A相电流',
                                '负荷侧B相电流',
                                '负荷侧C相电流',
                                '负荷侧A相功率因数',
                                '负荷侧B相功率因数',
                                '负荷侧C相功率因数',
                                '负载侧总功率因数',
                                '负载侧电流负序不平衡度',
                                '负载侧电流零序不平衡度'
                            ]
                        },
                        item_2: {
                            typeName: 'GPQC电能质量控制器',
                            props: [
                                '谐波分析总谐波畸变率',
                                '谐波分析基波分量',
                                '谐波分析直流分量',
                                '',
                                '直流总电压',
                                '直流电压1',
                                '直流电压2',
                                '',
                                '滤波器A相直流电流',
                                '滤波器B相直流电流',
                                '滤波器C相直流电流',
                                '滤波器N相直流电流',
                                'IGBT1温度',
                                'IGBT2温度',
                                'IGBT3温度',
                                '内部温度'
                            ]
                        }
                    },
                    paramsOptionsList: [
                        '机组谐波含量',
                        '谐波分析总谐波畸变率',
                        '谐波分析基波分量',
                        '谐波分析直流分量',
                        'APF-IGBT3温度',
                        'APF-IGBT2温度',
                        'APF-IGBT1温度',
                        'APF内部温度',
                        'APF滤波器N相电流',
                        'APF滤波器三相直流电流',
                        'APF三相直流电压',
                        'APF负载侧三相电流畸变率',
                        'APF负载侧三相电流',
                        'APF电源侧三相电流畸变率',
                        'APF电源侧线电压',
                        'APF电源侧相电压',
                        'APF通讯状态',
                        'APF负载电流零序不平衡度',
                        'APF负载电流负序不平衡度',
                        '电机轴承温度',
                        'U相绕组温度',
                        'W相绕组温度',
                        'V相绕组温度',
                        'APF电源A相功率因数',
                        'APF电源B相功率因数',
                        'APF电源C相功率因数',
                        'APF电源总功率因数',
                        'APF负载A相功率因数',
                        'APF负载B相功率因数',
                        'APF负载C相功率因数',
                        'APF负载总功率因数',
                        '平均功率因数',
                        '发电总无功功率',
                        '发电总有功功率',
                        'APF市电电流零序不平衡度',
                        'APF市电电流负序不平衡度',
                        'APF电源侧A相电流',
                        'APF电源侧B相电流',
                        'APF电源侧C相电流'
                    ],
                    tips: ['是否确定点击该控制按钮?', '提交中,请稍后...']
                }
            }
        }

        const find = (item) => {
            const el = arr.find(e => e.中文 === item)
            if (el) {
                return el.英文
            } else {
                return false
            }
        }

        const func = (objOrArr, father, index) => {
            const type = typeof objOrArr
            if (type === 'string') {
                const value = find(objOrArr)
                if (value) father[index] = value
            } else {
                const isArr = Array.isArray(objOrArr)
                if (isArr) {
                    objOrArr.forEach((item, index) => {
                        const value = find(item)
                        if (value) objOrArr[index] = value

                    })
                } else {
                    for (key in objOrArr) {
                        func(objOrArr[key], objOrArr, key)
                    }
                }
            }
        }

        for (const key in zh) {
            const element = zh[key]
            for (key2 in element) {
                func(element[key2], element, key2)
            }
        }


        // let xls = json2xls(arr);
        // fs.writeFileSync('name.txt', JSON.stringify(zh), 'binary');
        fs.writeFileSync('English.txt', JSON.stringify(zh));

    }).catch(err => new Error(err))